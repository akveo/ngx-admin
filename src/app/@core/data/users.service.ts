
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GENERAL } from './../../app-config';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
  }),
}


const path = GENERAL.ENTORNO.PERSONA_SERVICE;

@Injectable()
export class UserService {

  private user$ = new Subject<[object]>();
  public user: any;

  constructor(private http: HttpClient) {
    if (window.localStorage.getItem('id_token') !== null && window.localStorage.getItem('id_token') !== undefined) {
      const id_token = window.localStorage.getItem('id_token').split('.');
      const payload = JSON.parse(atob(id_token[1]));
      this.http.get(path + 'persona/?query=Usuario:' + payload.sub, httpOptions)
        .subscribe(res => {
          if (res !== null) {
            this.user = res[0];
            this.user$.next(this.user);
            window.localStorage.setItem('ente', res[0].Ente);
          }
        });
    }
  }

  public getEnte(): number {
    return parseInt(window.localStorage.getItem('ente'), 10);
  }

  public getUser() {
    return this.user$.asObservable();
  }
}
