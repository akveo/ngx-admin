import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { Config } from './../../app-config';
import {Md5} from 'ts-md5/dist/md5';

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
                'authorization': 'Basic ' + btoa(Config.LOCAL.TOKEN.CLIENTE_ID + ':'
                + Config.LOCAL.TOKEN.CLIENT_SECRET),
                'cache-control': 'no-cache',
            }),
        }
        this.logOut = '';
    }

    public post(url, data, header) {
        const body = JSON.stringify(data);
        return this.http.post(url, body, header)
    }

    public getToken() {
        let url = Config.LOCAL.TOKEN.REFRESH_TOKEN;
        const dato = {};
        url += '?grant_type=authorization_code';
        url += '&code=' + window.sessionStorage.getItem('code');
        url += '&redirect_uri=' + Config.LOCAL.TOKEN.REDIRECT_URL;
        this.post(url, dato, this.setting_basic).subscribe(
            data => {
            for (const i in data) {
                if (data.hasOwnProperty(i)) {
                window.sessionStorage.setItem(i, data[i]);
                }
            }
            this.session = data;
        });
    }

    public init() {
        const queryString = location.search.substring(1);
        const regex = /([^&=]+)=([^&]*)/g;
        let m;
        while (!!(m = regex.exec(queryString))) {
            if (window.sessionStorage.getItem(decodeURIComponent(m[1])) !== undefined) {
                window.sessionStorage.setItem(decodeURIComponent(m[1]), decodeURIComponent(m[2]))
            }
        }
        if (!this.live()) {
            this.getToken();
        }else {
            const id_token = window.sessionStorage.getItem('id_token').split('.');
            this.payload = JSON.parse(atob(id_token[1]));
            this.logOut = Config.LOCAL.TOKEN.SIGN_OUT_URL;
            this.logOut += '?id_token_hint=' + window.sessionStorage.getItem('id_token');
            this.logOut += '&post_logout_redirect_uri=' + Config.LOCAL.TOKEN.SIGN_OUT_REDIRECT_URL;
        }
    }
    public live() {
        if (window.sessionStorage.getItem('id_token') !== null ) {
            return true;
        }else {
            return false;
        }
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
                'redirect_uri=' + encodeURIComponent(this.params.REDIRECT_URL) + '&' +
                'response_type=' + encodeURIComponent(this.params.RESPONSE_TYPE) + '&' +
                'scope=' + encodeURIComponent(this.params.SCOPE);
        if (this.params.nonce) {
            url += '&nonce=' + encodeURIComponent(this.params.nonce);
        }
        url += '&state=' + encodeURIComponent(this.params.state);
        return url;
    }

    refresh() {

    }

    setExpiresAt() {

    }

    expired() {

    }

    private generateState() {
        const text = ((Date.now() + Math.random()) * Math.random()).toString().replace('.', '');
        return Md5.hashStr(text);
    }

    timer() {

    }

};

