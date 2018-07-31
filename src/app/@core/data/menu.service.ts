import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GENERAL } from './../../app-config';

const path = GENERAL.ENTORNO.CONF_MENU_SERVICE;

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
    }),
}
@Injectable()
export class MenuService {
  constructor(private http: HttpClient) {
  }

  get(endpoint) {
    interface Response {
      Id: number;
      Nombre: string;
      Url: string;
      TipoOpcion: string;
      Opciones: Response[];
    }
    return this.http.get<Response[]>(path + endpoint, httpOptions);
  }
}
