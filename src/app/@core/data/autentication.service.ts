import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { Config } from './../../app-config';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

    live() {
    }

    logout() {
    }

    refresh() {

    }

    getToken() {

    }

    setExpiresAt() {

    }

    expired() {

    }

    timer() {

    }

    post(element) {
        const body = JSON.stringify(element);
        this.http.post(Config.LOCAL.TOKEN.AUTORIZATION_URL, body, httpOptions);
    }

};
