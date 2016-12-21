import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Device } from "../models/Device";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DeviceService {
  private _deviceUrl = 'http://localhost:8080/sensor';

  constructor(private _http : Http) { }

  createNewDevice(device: Device){
    let body = JSON.stringify(device);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    return this._http.post(this._deviceUrl, body, options);
  }

  getAllDevices(): Observable<Device[]> {
    return this._http.get('https://api.myjson.com/bins/d4r7p')
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
