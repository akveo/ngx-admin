
import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GENERAL } from './../../app-config';

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
    }),
}


const path = GENERAL.ENTORNO.CAMPUS_MID;

@Injectable()
export class UserService {

  private users = {};

  constructor(private http: HttpClient) {
    if (window.localStorage.getItem('id_token') !== null && window.localStorage.getItem('id_token') !== undefined) {
      const id_token = window.localStorage.getItem('id_token').split('.');
      const payload = JSON.parse(atob(id_token[1]));
      this.http.get(path + 'persona/?query=Usuario:' + payload.sub)
      .subscribe(res => {
        if (res !== null) {
          this.users = res;
        }
      });
    }
  }
  
  getUser(): Observable<any> {
    return observableOf(this.users);
  }
  
}
