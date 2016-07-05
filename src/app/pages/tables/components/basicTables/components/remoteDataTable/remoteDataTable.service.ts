import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch'
import {Data} from "./remoteData.class";


@Injectable()
export class RemoteDataService {

  private urlData = '/assets/json/data.json';

  constructor(private http:Http) {
  }

  getData():Observable<Data[]> {
    return this.http.get(this.urlData)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.result || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }



}
