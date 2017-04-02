import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export class NgaAuthResult {

  constructor(protected success: boolean,
              protected errors?: string[],
              protected response?: any) {
  }

  getResponse(): any {
    return this.response;
  }

  getErrors(): string[] {
    return this.errors;
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

  constructor(protected providers: any = {}) {
  }

  authenticate(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).authenticate(data);
  }

  register(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).register(data);
  }

  requestPassword(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).requestPassword(data);
  }

  resetPassword(provider: string, data?: any): Observable<NgaAuthResult> {
    return this.getProvider(provider).requestPassword(data);
  }

  protected getProvider(provider: string): any {
    if (!this.providers[provider]) {
      throw new TypeError(`Nga auth provider '${provider}' is not registered`);
    }
    return this.providers[provider].object;
  }
}
