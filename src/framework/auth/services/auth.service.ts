import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NgaAbstractAuthProvider } from '../providers/abstract-auth.provider';
import { NgaTokenService } from './token.service';

export class NgaAuthResult {

  protected token: any;
  protected errors: string[] = [];
  protected messages: string[] = [];

  constructor(protected success: boolean,
              protected response?: any,
              protected redirect?: any,
              errors?: any,
              messages?: any,
              token?: any) {

    this.errors = this.errors.concat([errors]);
    if (errors instanceof Array) {
      this.errors = errors;
    }

    this.messages = this.messages.concat([messages]);
    if (messages instanceof Array) {
      this.messages = messages;
    }

    this.token = token;
  }

  getResponse(): any {
    return this.response;
  }

  getTokenValue(): any {
    return this.token;
  }

  getRedirect(): any {
    return this.redirect;
  }
  getErrors(): string[] {
    return this.errors.filter(val => !!val);
  }

  getMessages(): string[] {
    return this.messages.filter(val => !!val);
  }

  isSuccess(): boolean {
    return this.success;
  }

  isFailure(): boolean {
    return !this.success;
  }
}

@Injectable()
export class NgaAuthService {

  constructor(protected providers: any = {}, protected tokenService: NgaTokenService) {
  }

  authenticate(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).authenticate(data)
      .do((result: NgaAuthResult) => {
        if (result.isSuccess() && result.getTokenValue()) {
          this.tokenService.set(result.getTokenValue());
        }
      });
  }

  register(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).register(data)
      .do((result: NgaAuthResult) => {
        if (result.isSuccess() && result.getTokenValue()) {
          this.tokenService.set(result.getTokenValue());
        }
      });
  }

  requestPassword(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).requestPassword(data);
  }

  resetPassword(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).requestPassword(data);
  }

  logout(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).logout(data)
      .do((result: NgaAuthResult) => {
        if (result.isSuccess()) {
          this.tokenService.clear();
        }
      });
  }

  protected getProvider(provider: string): NgaAbstractAuthProvider {
    if (!this.providers[provider]) {
      throw new TypeError(`Nga auth provider '${provider}' is not registered`);
    }
    return this.providers[provider].object;
  }
}
