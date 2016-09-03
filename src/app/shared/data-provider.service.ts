import { Injectable } from '@angular/core';
import { Http, Request, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class DataProviderService {

  constructor(private http:Http) {
  }

  public get(options:{table:string, filter?: string, order?:string, offset:number, limit:number}):Observable<any> {

    let url = "http://localhost:8080/report-platform-server/api/v2/report/_table/" + options.table;

    let offset = options.offset || 0;
    let limit = options.limit || 100;
    let order = options.order || '';
    let filter = options.filter || '';
    let params = new URLSearchParams();
    //params.set('limit', limit.toString());
    //params.set('offset', offset.toString());
    //
    //if (options.order) {
    //  params.set('order', options.order.toString());
    //}
    //if (options.filter) {
    //  params.set('filter', options.filter.toString());
    //}

    //暂时解决方法,由于URLSearchParams存在"="编码的bug
    url += "?";
    url += "offset=" + offset;
    url += "&limit=" + limit;
    url += "&order=" + order;
    url += "&filter=" + filter;

    console.log('Begin get Data');
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body = res.json();
    return body.resource || {};
  }

  private handleError(error:any) {

    console.log("error");
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
