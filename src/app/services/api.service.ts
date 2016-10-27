import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {
    public token: string;
    private endpoint: string = 'https://example.com';

    constructor(private http: Http) {
    }

    private process(response:Response) {
        let json = response.json();
        if (json && json.errorMessage) {
            throw new Error(json.errorMessage);
        }
        return json;
    }

    private processError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let
            errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


    getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if(this.token) {
            headers.append('Authorization', this.token);
        }
        return {
            headers: headers
        };
    }

    get(url) {
        /*
        return this
            .http
            .get(this.endpoint + url, this.getHeaders())
            .map(this.process)
            .catch(this.processError);*/
        return Observable.fromPromise(Promise.resolve({
            name: "me"
        }));
    }

    post(url, data) {
        return Observable.fromPromise(Promise.resolve('token'));
        /*return this
            .http
            .post(this.endpoint+ url, data, this.getHeaders())
            .map(this.process);*/
    }

    put(url, data) {
        return this
            .http
            .put(this.endpoint+ url, data, this.getHeaders())
            .map(this.process)
            .catch(this.processError);

    }

    delete(url) {
        return this
            .http
            .delete(this.endpoint+ url, this.getHeaders())
            .map(this.process)
            .catch(this.processError);
    }

    setToken(token) {
        localStorage.setItem('ssid', token);
        this.token = token;
    }
}
