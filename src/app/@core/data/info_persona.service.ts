import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GENERAL } from './../../app-config';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const path = GENERAL.ENTORNO.INFO_PERSONA_SERVICE;

@Injectable()
export class InfoPersonaService {

    constructor(private http: HttpClient) {
    }

    get(endpoint) {
        return this.http.get(path + endpoint);
    }

    post(endpoint, element) {
        return this.http.post(path + endpoint, element, httpOptions);
    }

    put(endpoint, element) {
        return this.http.put(path + endpoint + '/', element, httpOptions); // + element.Id
    }

    delete(endpoint, element) {
        return this.http.delete(path + endpoint + '/' + element.Id);
    }
}
