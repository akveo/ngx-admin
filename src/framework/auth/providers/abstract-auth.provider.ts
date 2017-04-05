import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { NgaAuthResult } from '../services/auth.service';
import { getDeepFromObject, deepExtend } from '../helpers';

export abstract class NgaAbstractAuthProvider {

  protected defaultConfig: any = {};
  protected config: any = {};

  setConfig(config): void {
    this.config = deepExtend({}, this.defaultConfig, config);
  }

  getConfigValue(key): any {
    return getDeepFromObject(this.config, key, null);
  }

  abstract authenticate(data?: any): Observable<NgaAuthResult>;

  abstract register(data?: any): Observable<NgaAuthResult>;

  abstract requestPassword(data?: any): Observable<NgaAuthResult>;

  abstract resetPassword(data?: any): Observable<NgaAuthResult>;

  abstract logout(data?: any): Observable<NgaAuthResult>;

  protected createFailResponse(data?: any): Response {
    return new Response(new ResponseOptions({ body: '{}', status: 401 }));
  }

  protected createSuccessResponse(data?: any): Response {
    return new Response(new ResponseOptions({ body: '{}', status: 200 }));
  }

  protected getJsonSafe(res): any {
    let json;
    try {
      json = res.json();
    } catch(e) {
      json = {};
    }
    return json;
  }
}
