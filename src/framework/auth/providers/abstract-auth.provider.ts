import { Observable } from 'rxjs/Rx';
import { NgaAuthResult } from '../services/auth.service';

export abstract class NgaAbstractAuthProvider {

  protected defaultConfig: any = {};
  protected config: any = {};

  setConfig(config): void {
    // TODO: merge config deep
    this.config = Object.assign({}, this.defaultConfig, config);
  }

  getConfigValue(key): any {
    return this.config[key];
  }

  abstract authenticate(data?: any): Observable<NgaAuthResult>;

  abstract register(data?: any): Observable<NgaAuthResult>;

  abstract requestPassword(data?: any): Observable<NgaAuthResult>;

  abstract resetPassword(data?: any): Observable<NgaAuthResult>;
}
