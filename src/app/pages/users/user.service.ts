import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from "../models/User";

@Injectable()
export class UserService {
  private _deviceUrl = 'http://localhost:8080/admin';
  private _usersUrl = 'http://localhost:8080/user';

  constructor(private _http: Http) {
  }

  getAllUsers(): Observable<User[]> {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._usersUrl + "/users", options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateUser(user: User) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this._http.put(this._usersUrl + '/' + user.userId, user, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteUser(userId: string) {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.delete(this._usersUrl + '/' + userId, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getUserRoles(): Observable<any[]> {
    let options = new RequestOptions({headers: new Headers(), withCredentials: true});
    return this._http.get(this._deviceUrl + "/role", options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public isUserAdmin(): Observable<boolean> {
    return this.getUserRoles()
      .map(roles =>  roles.some(role => role.authority === 'ROLE_ADMIN'));
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
    return Observable.throw(res.status);
  }
}
