import { Injectable } from '@angular/core';
import { Http, Request, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class MenuService {

  constructor(private http:Http) {
  }

  public get():Observable<any> {

    return this.http.get("http://platform.report.me.yy.com/sys/menu/list.do", {withCredentials: true}) //Allow cors with cookies)
      .map(this.extractData
      ).catch(this.handleError);
  }


  private extractData(res:Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error:any) {

    console.log("error");
    alert("登陆功能正在集成中,请到http://www.yy.com上进行登陆")
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
