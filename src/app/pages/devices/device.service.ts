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
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    return this._http.post(this._deviceUrl, device, options);
  }

  updateDevice(device: Device){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    return this._http.put(this._deviceUrl + '/' + device.sensorId, device, options);
  }

  deleteDevice(sensorId: string){
    let options = new RequestOptions({ headers: new Headers(), withCredentials: true });
    return this._http.delete(this._deviceUrl + '/' + sensorId, options);
  }

  getDevice(sensorId: string) {
    return this._http.get(this._deviceUrl + "/" + sensorId)
      .map(this.extractData)
      .catch(this.handleError);
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
