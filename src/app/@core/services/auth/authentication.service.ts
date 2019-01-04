import '../../../rxjs-extensions';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'ngx-auth';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../../../environments/environment';
import { TokenStorage } from './token-storage.service';


interface AccessData {
  token: string;
}

@Injectable()
export class AuthenticationService implements AuthService {

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) { }

  /**
   * Check, if user already authorized.
   * @description Should return Observable with true or false values
   * @returns {Observable<boolean>}
   * @memberOf AuthService
   */
  public isAuthorized(): Observable<boolean> {
    return this.tokenStorage
      .getAccessToken()
      .pipe(map(token => !!token));
  }

  public getHeaders(token) {
    return {
      'Authorization': token
    };
  }

  /**
   * Get access token
   * @description Should return access token in Observable from e.g.
   * localStorage
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable<string> {
    return this.tokenStorage.getAccessToken();
  }

  /**
   * Function, that should perform refresh token verifyTokenRequest
   * @description Should be successfully completed so interceptor
   * can execute pending requests or retry original one
   * @returns {Observable<any>}
   */
  public refreshToken(): Observable<any> {
    return this.tokenStorage
      .getRefreshToken()
      .switchMap((refreshToken: string) => {
        return this.http.post(`http://localhost:3000/refresh`, { refreshToken });
      })
      .do(this.saveAccessData.bind(this))
      .catch((err) => {
        this.logout();

        return Observable.throw(err);
      });
  }

  /**
   * Function, checks response of failed request to determine,
   * whether token be refreshed or not.
   * @description Essentialy checks status
   * @param {Response} response
   * @returns {boolean}
   */
  public refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401;
  }

  /**
   * Verify that outgoing request is refresh-token,
   * so interceptor won't intercept this request
   * @param {string} url
   * @returns {boolean}
   */
  public verifyTokenRequest(url: string): boolean {
    return url.endsWith('/refresh');
  }

  /**
   * EXTRA AUTH METHODS
   */

  public login(payload): Observable<any> {
    return this.http.post(environment.loginUrl, payload)
      .do((tokens: AccessData) => this.saveAccessData(tokens))
      .catch((error) => {
        let message = '';

        if (error.status === 403) {
          message = 'Wrong password or email';
        } else {
          message = 'Server side error';
        }

        return Observable.throw(message);
      });
  }

  public signup(payload): Observable<any> {
    return this.http.post(environment.signupUrl, payload)
      .catch((error) => {
        let message = '';
        if (error.status === 409) {
          message = 'Already existing email address';
        } else {
          message = 'Server side error';
        }

        return Observable.throw(message);
      });
  }

  /**
   * Logout
   */
  public logout(): void {
    this.tokenStorage.clear();
  }

  /**
   * Save access data in the storage
   *
   * @private
   * @param {AccessData} data
   */
  private saveAccessData({ token }: AccessData) {
    this.tokenStorage
      .setAccessToken(token);
  }
}
