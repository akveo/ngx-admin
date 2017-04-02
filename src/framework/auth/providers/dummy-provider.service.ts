import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { NgaAuthResult } from '../services/auth.service';

// TODO: abstract provider

@Injectable()
export class NgaDummyProviderService {

  protected defaultConfig: any = {
    delay: 1000,
  };
  protected config: any = {};

  setConfig(config): void {
    // TODO: merge config deep
    this.config = Object.assign({}, this.defaultConfig, config);
  }

  getConfigValue(key): any {
    return this.config[key];
  }

  authenticate(data?: any): Observable<NgaAuthResult> {
    return Observable.of(this.createDummyResult(data))
      .delay(this.getConfigValue('delay'));
  }

  register(data?: any): Observable<NgaAuthResult> {
    return Observable.of(this.createDummyResult(data))
      .delay(this.getConfigValue('delay'));
  }

  requestPassword(data?: any): Observable<NgaAuthResult> {
    return Observable.of(this.createDummyResult(data))
      .delay(this.getConfigValue('delay'));
  }

  resetPassword(data?: any): Observable<NgaAuthResult> {
    return Observable.of(this.createDummyResult(data))
      .delay(this.getConfigValue('delay'));
  }

  protected createDummyResult(data?: any): NgaAuthResult {
    if (this.getConfigValue('alwaysFail')) {
      return new NgaAuthResult(false,
        ['Something went wrong'],
        new Response(new ResponseOptions({ body: '', status: 500 })));
    }

    return new NgaAuthResult(true, [], new Response(new ResponseOptions({ body: '', status: 200 })));
  }
}
