import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './../../app-config';

const path = Config.LOCAL.CONF_MENU_SERVICE;

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
