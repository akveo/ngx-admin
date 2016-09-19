import { Injectable } from '@angular/core';
import { Http, Request, Response, URLSearchParams, QueryEncoder, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

export class User {

  public id:string;

  public userName:string;
}

@Injectable()
export class UserService {

  private baseUrl:string = 'http://platform.report.me.yy.com/sys/user/';

  constructor(private http:Http) {
  }

  public listAllUsers():Observable<User[]> {

    return this.http.get(this.baseUrl + 'listUsers.do', {withCredentials: true}) //Allow cors with cookies)
      .map((resp:Response) => {
          return <User[]>resp.json();
        }
      );
  }

  public getUserInfo():Observable<User> {
    return this.http.get(this.baseUrl + "getUserInfo.do", {withCredentials: true})
      .map((resp:Response) => {
          return <User>resp.json();
        }
      );
  }

  public saveUser(user:User):Observable<User> {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.post(this.baseUrl + "saveUser.do", JSON.stringify(user), options)
      .map((resp:Response) => {
        return <User>resp.json();
      });
  }

  public editUserMenu(userId:String, menuIds:Number[]):void {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    let requestBody = JSON.stringify({userId: userId, menuIds: menuIds});
    return this.http.post(this.baseUrl + "editUserMenu.do", requestBody, options);
  }
}
