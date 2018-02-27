import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const path = 'http://localhost:8080/v1/';


@Injectable()
export class PersonaService {
    constructor(private http: HttpClient) {
    }

    get(endpoint) {
        return this.http.get(path + endpoint);
    }
    post(endpoint, element) {
        return this.http.post(path + endpoint, element, httpOptions);
    }
    put(endpoint, element) {
        return this.http.put(path + endpoint + '/' + element.Id, element, httpOptions);
    }
    delete(endpoint, element) {
        return this.http.delete(path + endpoint + '/' + element.Id);
    }
};
