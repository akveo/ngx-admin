import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { NgaAuthResult } from '../services/auth.service';
import { NgaAbstractAuthProvider } from './abstract-auth.provider';
import { getDeepFromObject } from '../helpers';

export interface NgaEmailPassModuleConfig {
  alwaysFail?: boolean,
  endpoint?: string,
  redirect?: {
    success?: string | null,
    failure?: string | null,
  },
  token?: {
    key?: string,
    getter?: Function,
  },
  errors?: {
    key?: string,
    getter?: Function,
  },
  messages?: {
    key?: string,
    getter?: Function,
  },
  defaultErrors?: string[]
  defaultMessages?: string[],
}

export interface NgaEmailPassResetModuleConfig extends NgaEmailPassModuleConfig {
  resetPasswordTokenKey?: string;
}

export interface NgEmailPassAuthProviderConfig {
  login?: boolean | NgaEmailPassModuleConfig,
  register?: boolean | NgaEmailPassModuleConfig,
  requestPass?: boolean | NgaEmailPassModuleConfig,
  resetPass?: boolean | NgaEmailPassResetModuleConfig,
  validation?: {
    password?: {
      required?: boolean,
      minLength?: number | null,
      maxLength?: number | null,
      regexp?: string | null,
    },
    email?: {
      required?: boolean,
      regexp?: string | null,
    },
    fullName?: {
      required?: boolean,
      minLength?: number | null,
      maxLength?: number | null,
      regexp?: string | null,
    },
  },
}

@Injectable()
export class NgaEmailPassAuthProvider extends NgaAbstractAuthProvider {

  protected defaultConfig: NgEmailPassAuthProviderConfig = {
    login: {
      alwaysFail: false,
      endpoint: '/api/auth/login',
      redirect: {
        success: '/',
        failure: null,
      },
      token: {
        key: 'data.token',
        getter: (res) => getDeepFromObject(this.getJsonSafe(res), this.getConfigValue('login.token.key')),
      },
      errors: {
        key: 'data.errors',
        getter: (res) => getDeepFromObject(this.getJsonSafe(res), this.getConfigValue('login.errors.key'), this.getConfigValue('login.defaultErrors')),
      },
      messages: {
        key: 'data.messages',
        getter: (res) => getDeepFromObject(this.getJsonSafe(res), this.getConfigValue('login.messages.key'), this.getConfigValue('login.defaultMessages')),
      },
      defaultErrors: ['Login/Email combination is not correct, please try again.'],
      defaultMessages: ['You have been successfully logged in.'],
    },
    register: {
      alwaysFail: false,
      endpoint: '/api/auth/register',
      redirect: {
        success: '/',
        failure: null,
      },
      token: {
        key: 'data.token',
        getter: (res) => getDeepFromObject(this.getJsonSafe(res), this.getConfigValue('register.token.key')),
      },
      errors: {
        key: 'data.errors',
        getter: (res) => getDeepFromObject(this.getJsonSafe(res), this.getConfigValue('register.errors.key'), this.getConfigValue('register.defaultErrors')),
      },
      messages: {
        key: 'data.messages',
        getter: (res) => getDeepFromObject(this.getJsonSafe(res), this.getConfigValue('register.messages.key'), this.getConfigValue('register.defaultMessages')),
      },
      defaultErrors: ['Something went wrong, please try again.'],
      defaultMessages: ['You have been successfully registered.'],
    },
    // requestPass: {
    //   endpoint: '/api/auth/request-pass',
    //   redirect: {
    //     success: '/',
    //     failure: null,
    //   },
    //   errors: {
    //     key: 'errors',
    //     getter: (res) => getDeepFromObject(res, this.getConfigValue('requestPass.errors.key')),
    //   },
    //   messages: {
    //     key: 'message',
    //     getter: (res) => getDeepFromObject(res, this.getConfigValue('requestPass.messages.key')),
    //   },
    //   defaultErrors: ['Something went wrong, please try again.'],
    //   defaultMessages: ['Reset password instructions have been sent to your email.'],
    // },
    // resetPass: {
    //   endpoint: '/api/auth/reset-pass',
    //   redirect: {
    //     success: '/',
    //     failure: null,
    //   },
    //   errors: {
    //     key: 'errors',
    //     getter: (res) => getDeepFromObject(res, this.getConfigValue('resetPass.errors.key')),
    //   },
    //   messages: {
    //     key: 'message',
    //     getter: (res) => getDeepFromObject(res, this.getConfigValue('resetPass.messages.key')),
    //   },
    //   resetPasswordTokenKey: 'reset_password_token',
    //   defaultErrors: ['Something went wrong, please try again.'],
    //   defaultMessages: ['Your password has been successfully changed.'],
    // },
    // validation: {
    //   password: {
    //     required: true,
    //     minLength: 4,
    //     maxLength: 12,
    //     regexp: null,
    //   },
    //   email: {
    //     required: true,
    //     regexp: null,
    //   },
    //   fullName: {
    //     required: true,
    //     minLength: 4,
    //     maxLength: 50,
    //     regexp: null,
    //   },
    // },
  };

  constructor(protected http: Http) {
    super();
  }

  authenticate(data?: any): Observable<NgaAuthResult> {
    return this.http.post(this.getConfigValue('login.endpoint'), data)
      .map((res) => {
        if (this.getConfigValue('login.alwaysFail')) {
          console.log('nga-auth: EmailPass provider, alwaysFail mode is enabled.');
          throw this.createFailResponse(data);
        }
        return res;
      })
      .map((res) => {
        return new NgaAuthResult(
          true,
          res,
          this.getConfigValue('login.redirect.success'),
          [],
          this.getConfigValue('login.messages.getter')(res),
          this.getConfigValue('login.token.getter')(res)
        );
      })
      .catch((res) => {
        let errors = [];
        if (res instanceof Response) {
          errors = this.getConfigValue('login.errors.getter')(res);
        } else {
          errors.push('Something went wrong.');
        }
        return Observable.of(
          new NgaAuthResult(
            false,
            res,
            this.getConfigValue('login.redirect.failure'),
            errors,
          ));
      });
  }

  register(data?: any): Observable<NgaAuthResult> {
    return this.http.post(this.getConfigValue('register.endpoint'), data)
      .map((res) => {
        if (this.getConfigValue('register.alwaysFail')) {
          console.log('nga-auth: EmailPass provider, alwaysFail mode is enabled.');
          throw this.createFailResponse(data);
        }
        return res;
      })
      .map((res) => {
        return new NgaAuthResult(
          true,
          res,
          this.getConfigValue('register.redirect.success'),
          [],
          this.getConfigValue('register.messages.getter')(res),
          this.getConfigValue('register.token.getter')(res)
        );
      })
      .catch((res) => {
        let errors = [];
        if (res instanceof Response) {
          errors = this.getConfigValue('register.errors.getter')(res);
        } else {
          errors.push('Something went wrong.');
        }
        return Observable.of(
          new NgaAuthResult(
            false,
            res,
            this.getConfigValue('register.redirect.failure'),
            errors,
          ));
      });
  }

  requestPassword(data?: any): Observable<NgaAuthResult> {
    return Observable.empty();
  }

  resetPassword(data?: any): Observable<NgaAuthResult> {
    return Observable.empty();
  }

  logout(data?: any): Observable<NgaAuthResult> {
    return Observable.empty();
  }
}
