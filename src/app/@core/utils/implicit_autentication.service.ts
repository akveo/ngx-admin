
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { GENERAL } from './../../app-config';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class ImplicitAutenticationService {
    bearer: { headers: HttpHeaders; };

    init(): void {
        this.clearUrl();
    }

    private params: any;
    public session = null;
    public payload: any;
    public logOut: any;

    constructor() {
        this.bearer = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
                'cache-control': 'no-cache',
            }),
        }
        this.logOut = '';
    }
    public logout() {
        this.logOut = GENERAL.ENTORNO.TOKEN.SIGN_OUT_URL;
        this.logOut += '?id_token_hint=' + window.localStorage.getItem('id_token');
        this.logOut += '&post_logout_redirect_uri=' + GENERAL.ENTORNO.TOKEN.SIGN_OUT_REDIRECT_URL;
        this.logOut += '&state=' + window.localStorage.getItem('state');
        window.location.replace(this.logOut);
        return this.logOut;
    }
    clearUrl() {
        const uri = window.location.toString();
        if (uri.indexOf('?') > 0) {
            const clean_uri = uri.substring(0, uri.indexOf('?'));
            window.history.replaceState({}, document.title, clean_uri);
        }
    }

    getPayload() {
        if (this.live) {
            const id_token = window.localStorage.getItem('id_token').split('.');
            return JSON.parse(atob(id_token[1]));
        } else {
            return false;
        }
    }

    public live() {
        if (window.localStorage.getItem('id_token') !== null && window.localStorage.getItem('id_token') !== undefined) {
            this.bearer = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
                    'cache-control': 'no-cache',
                }),
            }
            return true;
        } else {
            return false;
        }
    }

    public getAuthorizationUrl(): string {
        this.params = GENERAL.ENTORNO.TOKEN;
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

    private generateState() {
        const text = ((Date.now() + Math.random()) * Math.random()).toString().replace('.', '');
        return Md5.hashStr(text);
    }

}
