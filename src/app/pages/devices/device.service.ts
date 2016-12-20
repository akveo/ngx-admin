import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Device} from "../models/Device";

@Injectable()
export class DeviceService {
  private _deviceUrl = 'http://localhost:8080/sensor';

  constructor(private _http : Http) { }

  createNewDevice(device: Device){
    let body = JSON.stringify(device);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    return this._http.post(this._deviceUrl, body, options);
  }

  getAllDevices(): Observable<Device[]> {
    return this._http.get(this._deviceUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}
