import { Injectable } from '@angular/core';
import { Http, Request, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class MenuService {

  constructor(private http:Http) {
  }

  public listNg2Menus():Observable<any> {

    return this.http.get("http://platform.report.me.yy.com/sys/menu/listNg2Menus.do", {withCredentials: true}) //Allow cors with cookies)
      .map(this.extractData
      ).catch(this.handleError);
  }

  public listPrimengMenus(uid:String):Observable<any> {
    return this.http.get("http://platform.report.me.yy.com/sys/menu/listPrimengMenus.do?uid="
        + uid, {withCredentials: true}
      ) //Allow cors with cookies)
      .map(this.extractData
      ).catch(this.handleError);
  }


  private extractData(res:Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error:any) {

    console.log("error");
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    if (error.status == 403) {
      alert("您尚未登陆,页面将跳转到登陆页面")
      document.location.href = "http://login.report.me.yy.com"
    }

    return Observable.throw(errMsg);
  }

}
