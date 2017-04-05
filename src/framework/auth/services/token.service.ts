import { Injectable, Inject } from '@angular/core';
import { Observable, ReplaySubject, Subject, BehaviorSubject } from 'rxjs/Rx';

import { NgaAuthOptionsToken } from '../auth.options';
import { deepExtend, getDeepFromObject } from '../helpers';

@Injectable()
export class NgaTokenService {

  protected defaultConfig: any = {
    token: {
      key: 'auth_app_token',
      getter: () => Observable.of(localStorage.getItem(this.getConfigValue('token.key'))),
      setter: (token) => Observable.of(localStorage.setItem(this.getConfigValue('token.key'), token)),
      deleter: (token) => Observable.of(localStorage.removeItem(this.getConfigValue('token.key'))),
    }
  };
  protected config: any = {};

  protected token$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(@Inject(NgaAuthOptionsToken) protected options) {
    this.setConfig(options);

    this.get().subscribe(token => this.publishToken(token));
  }

  setConfig(config): void {
    this.config = deepExtend({}, this.defaultConfig, config);
  }

  getConfigValue(key): any {
    return getDeepFromObject(this.config, key, null);
  }

  set(token: any): Observable<any> {
    this.publishToken(token);
    return this.getConfigValue('token.setter')(token);
  }

  get(): Observable<any> {
    return this.getConfigValue('token.getter')();
  }

  tokenChange(): Observable<any> {
    return this.token$.publish().refCount();
  }

  clear(): Observable<any> {
    this.publishToken(null);
    return this.getConfigValue('token.deleter')();
  }

  protected publishToken(token): void {
    this.token$.next(token);
  }
}
