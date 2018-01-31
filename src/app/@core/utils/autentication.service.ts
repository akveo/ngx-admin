import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { Config } from './../../app-config';
import {Md5} from 'ts-md5/dist/md5';

export class LocalStorage {
    get(item) { return window.sessionStorage.getItem(item) }
    set(item, value) { window.sessionStorage.setItem(item, value); }
    clear(item) { window.sessionStorage.removeItem(item); }
}

const params = {};
const queryString = location.search.substring(1);
const regex = /([^&=]+)=([^&]*)/g;
let m;

while (!!(m = regex.exec(queryString))) {
params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}

if (params.code) {
    window.sessionStorage.setItem('code', params.code);
}

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable()
export class AutenticationService implements OnInit {
    static params: any;
    static live: any;
    constructor(private http: HttpClient ) {
        AutenticationService.live = true;

    }

    logout() {
    }

    ngOnInit() {
    }

    static getAuthorizationUrl(): string {
        AutenticationService.params = Config.LOCAL.TOKEN;
        if (!AutenticationService.params.nonce) {
            AutenticationService.params.nonce = this.generateState();
        }
        if (!AutenticationService.params.state) {
            AutenticationService.params.state = this.generateState();
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

    getToken() {

    }

    setExpiresAt() {

    }

    expired() {

    }

    static generateState() {
        const text = ((Date.now() + Math.random()) * Math.random()).toString().replace('.', '');
        return Md5.hashStr(text);
    }

    timer() {

    }

    post(element) {
        const body = JSON.stringify(element);
        this.http.post(Config.LOCAL.TOKEN.AUTORIZATION_URL, body, httpOptions);
    }

};

