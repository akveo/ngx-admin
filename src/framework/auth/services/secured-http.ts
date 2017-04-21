import { Injectable, Injector } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { NgaAuthService } from './auth.service';

@Injectable()
export class NgaSecuredHttp {

  protected onErrorSubject = new Subject<any>();

  constructor(private injector: Injector,
              private http: Http) {
  }

  get(url: string, options: RequestOptionsArgs = {}): Observable<Response> {
    return this.doRequest(this.prepareOptions(options)
      .switchMap((newOptions: any) => this.http.get(url, newOptions)));
  }

  post(url: string, body: any, options: RequestOptionsArgs = {}): Observable<Response> {
    return this.doRequest(this.prepareOptions(options)
      .switchMap((newOptions: any) => this.http.post(url, body, newOptions)));
  }

  put(url: string, body: any, options: RequestOptionsArgs = {}): Observable<Response> {
    return this.doRequest(this.prepareOptions(options)
      .switchMap((newOptions: any) => this.http.put(url, body, newOptions)));
  }

  delete(url: string, options: RequestOptionsArgs = {}): Observable<Response> {
    return this.doRequest(this.prepareOptions(options)
      .switchMap((newOptions: any) => this.http.delete(url, newOptions)));
  }

  onRequestError(): Observable<any> {
    return this.onErrorSubject.publish().refCount();
  }

  private prepareOptions(options: RequestOptionsArgs = {}): Observable<RequestOptionsArgs> {
    return this.authService.getToken()
      .map((token: any) => {
        options.headers = options.headers || new Headers();
        this.addAuthTokenHeader(options.headers, token);
        return options;
      });
  }

  private doRequest(requestObservable: Observable<Response>): Observable<Response> {
    return <Observable<Response>> requestObservable
      .catch((err) => {
        this.onErrorSubject.next(err);
        throw err;
      });
  }

  private addAuthTokenHeader(headers: Headers, token: string) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  private get authService(): NgaAuthService {
    return this.injector.get(NgaAuthService);
  }
}
