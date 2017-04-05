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

  /**
   * Retrieves current authenticated token stored
   * @returns {Observable<any>}
   */
  getToken(): Observable<any> {
    return this.tokenService.get();
  }

  /**
   * Returns true if auth token is presented in the token storage
   * @returns {Observable<any>}
   */
  isAuthenticated(): Observable<any> {
    return this.getToken().map(token => !!token);
  }

  /**
   * Returns tokens stream
   * @returns {Observable<any>}
   */
  onTokenChange(): Observable<any> {
    return this.tokenService.tokenChange();
  }

  /**
   * Returns authentication status stream
   * @returns {Observable<any>}
   */
  onAuthenticationChange(): Observable<any> {
    return this.onTokenChange().map(token => !!token);
  }

  /**
   * Authenticates with the selected provider
   * Stores received token in the token storage
   *
   * Example:
   * authenticate('email', {email: 'email@example.com', password: 'test'})
   *
   * @param provider
   * @param data
   * @returns {Observable<NgaAuthResult>}
   */
  authenticate(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).authenticate(data)
      .do((result: NgaAuthResult) => {
        if (result.isSuccess() && result.getTokenValue()) {
          this.tokenService.set(result.getTokenValue());
        }
      });
  }

  /**
   * Registers with the selected provider
   * Stores received token in the token storage
   *
   * Example:
   * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
   *
   * @param provider
   * @param data
   * @returns {Observable<NgaAuthResult>}
   */
  register(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).register(data)
      .do((result: NgaAuthResult) => {
        if (result.isSuccess() && result.getTokenValue()) {
          this.tokenService.set(result.getTokenValue());
        }
      });
  }

  /**
   * Sign outs with the selected provider
   * Removes token from the token storage
   *
   * Example:
   * logout('email')
   *
   * @param provider
   * @returns {Observable<NgaAuthResult>}
   */
  logout(provider: string): Observable<NgaAuthResult> {
    return this.getProvider(provider).logout()
      .do((result: NgaAuthResult) => {
        console.log(result);
        if (result.isSuccess()) {
          this.tokenService.clear();
        }
      });
  }

  /**
   * Sends forgot password request to the selected provider
   *
   * Example:
   * requestPassword('email', {email: 'email@example.com'})
   *
   * @param provider
   * @param data
   * @returns {Observable<NgaAuthResult>}
   */
  requestPassword(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).requestPassword(data);
  }

  /**
   * Tries to reset password with the selected provider
   *
   * Example:
   * resetPassword('email', {newPassword: 'test'})
   *
   * @param provider
   * @param data
   * @returns {Observable<NgaAuthResult>}
   */
  resetPassword(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).requestPassword(data);
  }

  protected getProvider(provider: string): NgaAbstractAuthProvider {
    if (!this.providers[provider]) {
      throw new TypeError(`Nga auth provider '${provider}' is not registered`);
    }
    return this.providers[provider].object;
  }
}
