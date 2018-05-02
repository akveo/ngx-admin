import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { general } from './../../app-config';

const path = general.ENTORNO.CONF_MENU_SERVICE;

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
    return this.http.get<Response[]>(path + endpoint);
  }
}
