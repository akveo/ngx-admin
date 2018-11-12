import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Config } from './../../app-config';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AutenticationService {
    private params: any;
    public session = null;
    private setting_basic: any;
    public payload: any;
    public logOut: any;

    constructor(private http: HttpClient) {
        this.setting_basic = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'authorization': 'Basic ' + btoa(Config.LOCAL.TOKEN.CLIENTE_ID + ':',
                    //    + Config.LOCAL.TOKEN.CLIENT_SECRET
                ),
                'cache-control': 'no-cache',
            }),
        }
        this.logOut = '';
        this.timer();
    }

    public getLogoutUrl() {
        return this.logOut;
    }

    public post(url, data, header) {
        const body = JSON.stringify(data);
        return this.http.post(url, body, header)
    }

    public getToken() {
        if (window.sessionStorage.getItem('code') !== null &&
            window.sessionStorage.getItem('id_token') === null) {
            let url = ''; // Config.LOCAL.TOKEN.REFRESH_TOKEN;
            const dato = {};
            url += '?grant_type=authorization_code';
            url += '&code=' + window.sessionStorage.getItem('code');
            url += '&redirect_uri=' + window.location.href;
            this.post(url, dato, this.setting_basic).subscribe(
                data => {
                    for (const i in data) {
                        if (data.hasOwnProperty(i)) {
                            window.sessionStorage.setItem(i, data[i]);
                        }
                    }
                    this.session = data;
                    this.setExpiresAt();
                    this.clearUrl();
                });
        }
        this.timer();
    }

    clearUrl() {
        const uri = window.location.toString();
        if (uri.indexOf('?') > 0) {
            const clean_uri = uri.substring(0, uri.indexOf('?'));
            window.history.replaceState({}, document.title, clean_uri);
        }
    }

    public init() {
        const queryString = location.search.substring(1);
        const regex = /([^&=]+)=([^&]*)/g;
        let m;
        if (this.logoutValid()) {
            this.clearUrl();
        } else {
            while (!!(m = regex.exec(queryString))) {
                if (window.sessionStorage.getItem(decodeURIComponent(m[1])) !== undefined) {
                    window.sessionStorage.setItem(decodeURIComponent(m[1]), decodeURIComponent(m[2]))
                }
            }
            if (!this.live()) {
                this.getToken();
            } else {
                const id_token = window.sessionStorage.getItem('id_token').split('.');
                this.payload = JSON.parse(atob(id_token[1]));
                this.logOut = Config.LOCAL.TOKEN.SIGN_OUT_URL;
                this.logOut += '?id_token_hint=' + window.sessionStorage.getItem('id_token');
                this.logOut += '&post_logout_redirect_uri=' + Config.LOCAL.TOKEN.SIGN_OUT_REDIRECT_URL;
                this.logOut += '&state=' + window.sessionStorage.getItem('state');
            }
        }
    }

    getPayload() {
        const id_token = window.sessionStorage.getItem('id_token').split('.');
        return JSON.parse(atob(id_token[1]));
    }

    public live() {
        if (window.sessionStorage.getItem('id_token') !== null) {
            return true;
        } else {
            return false;
        }
    }

    public logoutValid() {
        let state: any;
        let valid = true;
        const queryString = location.search.substring(1);
        const regex = /([^&=]+)=([^&]*)/g;
        let m;
        while (!!(m = regex.exec(queryString))) {
            state = decodeURIComponent(m[2]);
        }
        if (window.sessionStorage.getItem('state') === state) {
            window.sessionStorage.clear();
            valid = true;
        } else {
            valid = false;
        }
        return valid;
    }

    public getAuthorizationUrl(): string {
        this.params = Config.LOCAL.TOKEN;
        if (!this.params.nonce) {
            this.params.nonce = this.generateState();
        }
        if (!this.params.state) {
            this.params.state = this.generateState();
        }
        let url = this.params.AUTORIZATION_URL + '?' +
            'client_id=' + encodeURIComponent(this.params.CLIENTE_ID) + '&' +
            'redirect_uri=' + encodeURIComponent(window.location.href) + '&' +
            'response_type=' + encodeURIComponent(this.params.RESPONSE_TYPE) + '&' +
            'scope=' + encodeURIComponent(this.params.SCOPE) + '&' +
            'state_url=' + encodeURIComponent(window.location.hash);
        if (this.params.nonce) {
            url += '&nonce=' + encodeURIComponent(this.params.nonce);
        }
        url += '&state=' + encodeURIComponent(this.params.state);
        return url;
    }

    refresh() {
        this.params = Config.LOCAL.TOKEN;
        const url = ''; // this.params.REFRESH_TOKEN + '?' +
            'grant_type=' + encodeURIComponent('refresh_token') + '&' +
            'refresh_token=' + encodeURIComponent(window.sessionStorage.getItem('refresh_token')) + '&' +
            'redirect_uri=' + encodeURIComponent(window.location.href);
        const dato = {};

        this.post(url, dato, this.setting_basic).subscribe(
            data => {
                for (const i in data) {
                    if (data.hasOwnProperty(i)) {
                        window.sessionStorage.setItem(i, data[i]);
                    }
                }
                this.session = data;
                window.sessionStorage.removeItem('expires_at');
                this.setExpiresAt();
            });
    }

    setExpiresAt() {
        if (window.sessionStorage.getItem('expires_at') === null) {
            const expires_at = new Date();
            expires_at.setSeconds(expires_at.getSeconds() +
                parseInt(window.sessionStorage.getItem('expires_in'), 10) - 60);
            window.sessionStorage.setItem('expires_at', expires_at.toUTCString());
        }
    }

    expired() {
        return (new Date(window.sessionStorage.getItem('expires_at')) < new Date());
    }

    private generateState() {
        const text = ((Date.now() + Math.random()) * Math.random()).toString().replace('.', '');
        return Md5.hashStr(text);
    }

    timer() {
        Observable.interval(5000).subscribe(x => {
            if (window.sessionStorage.getItem('expires_at') !== null) {
                if (this.expired()) {
                    this.refresh();
                }
            }
        });
    }
}
