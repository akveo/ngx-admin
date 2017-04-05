import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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

  constructor(@Inject(NgaAuthOptionsToken) protected options) {
    this.setConfig(options)
  }

  setConfig(config): void {
    this.config = deepExtend({}, this.defaultConfig, config);
    console.log(this.config);
  }

  getConfigValue(key): any {
    return getDeepFromObject(this.config, key, null);
  }

  set(token: any): Observable<any> {
    return this.getConfigValue('token.setter')(token);
  }

  get(): Observable<any> {
    return this.getConfigValue('token.getter')();
  }

  clear(): Observable<any> {
    return this.getConfigValue('token.deleter')();
  }
}
