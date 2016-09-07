import { Injectable } from '@angular/core';
import { Http, Request, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class EasyqService {

  constructor(private http:Http) {
  }

  public getData(options:{table:string, filter?: string, order?:string, offset:number, limit:number}):Observable<any> {

    let url = "http://platform.report.me.yy.com/api/v2/report/_table/" + options.table;

    let offset = options.offset || 0;
    let limit = options.limit || 9999;
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

    return this.http.get(url, {withCredentials: true})
      .map((resp:Response) => {
        return resp.json().resource
      });
  }

  public getSchema(options:{table:string, filter?: string, order?:string, offset:number, limit:number}):Observable<any> {

  }
}
