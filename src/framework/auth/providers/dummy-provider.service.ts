import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { NgaAuthResult } from '../services/auth.service';
import { NgaAbstractProviderService } from './abstract-provider';

export interface NgaDummyProviderConfig {
  delay?: number;
  alwaysFail?: boolean;
}

@Injectable()
export class NgaDummyProviderService extends NgaAbstractProviderService {

  protected defaultConfig: NgaDummyProviderConfig = {
    delay: 1000,
  };

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
