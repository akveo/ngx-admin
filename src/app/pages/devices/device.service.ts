import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Device} from "../models/Device";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DeviceService {
  private _deviceUrl = 'http://localhost:8080/sensor';
  private _userDevices = 'http://localhost:8080/user/sensor';

  constructor(private _http: Http) {
  }

  createNewDevice(device: Device) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this._http.post(this._deviceUrl, device, options);
  }

  updateDevice(device: Device) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, withCredentials: true});
    console.log(device);
    return this._http.put(this._deviceUrl + '/' + device.sensorId, device, options);
  }

  deleteDevice(sensorId: string) {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.delete(this._deviceUrl + '/' + sensorId, options);
  }

  getDevice(sensorId: string) {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._deviceUrl + "/" + sensorId, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllDevices(): Observable<Device[]> {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._deviceUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllDevicesForUser(): Observable<Device[]> {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});

    return this._http.get(this._userDevices, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  claimDevice(devId: string) {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});

    return this._http.post(this._deviceUrl + "/claim/" + devId, {}, options);
  }

  private extractData(res: Response) {
    let body;
    try {
      body = res.json();
      return body;
    } catch (e) {
      return {};
    }
  }

  private handleError(error: Response) {
    try {
      let jsonError = error.json();
      return Observable.throw(jsonError.error);
    } catch (e) {
      return Observable.throw('error');
    }
  }
}
