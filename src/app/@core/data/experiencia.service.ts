import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GENERAL } from './../../app-config';


const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
    }),
}

const path = GENERAL.ENTORNO.EXPERIENCIASERVICE;

@Injectable()
export class ExperienciaService {

    constructor(private http: HttpClient) {
    }
    get(endpoint) {
        return this.http.get(path + endpoint, httpOptions);
    }
    post(endpoint, element) {
        return this.http.post(path + endpoint, element, httpOptions);
    }
    put(endpoint, element) {
        return this.http.put(path + endpoint + '/' + element.Id, element, httpOptions);
    }
    delete(endpoint, element) {
        return this.http.delete(path + endpoint + '/' + element.Id, httpOptions);
    }
}
