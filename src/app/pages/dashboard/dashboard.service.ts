import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardService {
  private _dashboardUrl = 'http://localhost:8080/dashboard';

  constructor(private _http: Http) {

  }

  getNumberOfDevicesForEachType() {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._dashboardUrl + "/numberOfSensorsForEachType", options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNumberOfActiveDevices() {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._dashboardUrl + "/numberOfActiveSensors", options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNumberOfUsers() {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._dashboardUrl + "/numberOfUsers", options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNumberOfMeasurementsForAllTypes() {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._dashboardUrl + "/numberOfMeasurementsForAllTypes", options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNumberOfActiveDevicesForUser() {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._dashboardUrl + "/numberOfActiveSensorsForUser", options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNumberOfMeasurementsForUserByType() {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._dashboardUrl + "/numberOfMeasurementsForUserByType", options)
      .map(this.extractData)
      .catch(this.handleError);
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

  private handleError(res: Response) {
    console.log(res.status);
    return Observable.throw(res.status);
  }
}
