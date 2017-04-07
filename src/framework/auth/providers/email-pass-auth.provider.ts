import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NgEmailPassAuthProviderConfig } from './email-pass-auth.options';
import { NgaAuthResult } from '../services/auth.service';
import { NgaAbstractAuthProvider } from './abstract-auth.provider';
import { getDeepFromObject } from '../helpers';


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
      defaultErrors: ['Something went wrong, please try again.'],
      defaultMessages: ['You have been successfully registered.'],
    },
    logout: {
      alwaysFail: false,
      endpoint: '/api/auth/logout',
      redirect: {
        success: '/',
        failure: null,
      },
      defaultErrors: ['Something went wrong, please try again.'],
      defaultMessages: ['You have been successfully registered.'],
    },
    requestPass: {
      endpoint: '/api/auth/request-pass',
      redirect: {
        success: '/',
        failure: null,
      },
      defaultErrors: ['Something went wrong, please try again.'],
      defaultMessages: ['Reset password instructions have been sent to your email.'],
    },
    resetPass: {
      endpoint: '/api/auth/reset-pass',
      redirect: {
        success: '/',
        failure: null,
      },
      resetPasswordTokenKey: 'reset_password_token',
      defaultErrors: ['Something went wrong, please try again.'],
      defaultMessages: ['Your password has been successfully changed.'],
    },
    token: {
      key: 'data.token',
      getter: (module: string, res: Response) => getDeepFromObject(this.getJsonSafe(res), this.getConfigValue('token.key')),
    },
    errors: {
      key: 'data.errors',
      getter: (module: string, res: Response) => getDeepFromObject(this.getJsonSafe(res), this.getConfigValue('errors.key'), this.getConfigValue(`${module}.defaultErrors`)),
    },
    messages: {
      key: 'data.messages',
      getter: (module: string, res: Response) => getDeepFromObject(this.getJsonSafe(res), this.getConfigValue('messages.key'), this.getConfigValue(`${module}.defaultMessages`)),
    },
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

  constructor(protected http: Http, private route: ActivatedRoute) {
    super();
  }

  authenticate(data?: any): Observable<NgaAuthResult> {
    return this.http.post(this.getConfigValue('login.endpoint'), data)
      .map((res) => {
        if (this.getConfigValue('login.alwaysFail')) {
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
          this.getConfigValue('messages.getter')('login', res),
          this.getConfigValue('token.getter')('login', res)
        );
      })
      .catch((res) => {
        let errors = [];
        if (res instanceof Response) {
          errors = this.getConfigValue('errors.getter')('login', res);
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
          this.getConfigValue('messages.getter')('register', res),
          this.getConfigValue('token.getter')('register', res)
        );
      })
      .catch((res) => {
        let errors = [];
        if (res instanceof Response) {
          errors = this.getConfigValue('errors.getter')('register', res);
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
    return this.http.post(this.getConfigValue('requestPass.endpoint'), data)
      .map((res) => {
        if (this.getConfigValue('requestPass.alwaysFail')) {
          throw this.createFailResponse();
        }
        return res;
      })
      .map((res) => {
        return new NgaAuthResult(
          true,
          res,
          this.getConfigValue('requestPass.redirect.success'),
          [],
          this.getConfigValue('messages.getter')('requestPass', res)
        );
      })
      .catch((res) => {
        let errors = [];
        if (res instanceof Response) {
          errors = this.getConfigValue('errors.getter')('requestPass', res);
        } else {
          errors.push('Something went wrong.');
        }
        return Observable.of(
          new NgaAuthResult(
            false,
            res,
            this.getConfigValue('requestPass.redirect.failure'),
            errors,
          ));
      });
  }

  resetPassword(data: any = {}): Observable<NgaAuthResult> {
    const tokenKey = this.getConfigValue('resetPass.resetPasswordTokenKey');
    data[tokenKey] = this.route.snapshot.queryParams[tokenKey];

    return this.http.post(this.getConfigValue('resetPass.endpoint'), data)
      .map((res) => {
        if (this.getConfigValue('resetPass.alwaysFail')) {
          throw this.createFailResponse();
        }
        return res;
      })
      .map((res) => {
        return new NgaAuthResult(
          true,
          res,
          this.getConfigValue('resetPass.redirect.success'),
          [],
          this.getConfigValue('messages.getter')('resetPass', res)
        );
      })
      .catch((res) => {
        let errors = [];
        if (res instanceof Response) {
          errors = this.getConfigValue('errors.getter')('resetPass', res);
        } else {
          errors.push('Something went wrong.');
        }
        return Observable.of(
          new NgaAuthResult(
            false,
            res,
            this.getConfigValue('resetPass.redirect.failure'),
            errors,
          ));
      });
  }

  logout(): Observable<NgaAuthResult> {
    return this.http.delete(this.getConfigValue('logout.endpoint'))
      .map((res) => {
        if (this.getConfigValue('logout.alwaysFail')) {
          throw this.createFailResponse();
        }
        return res;
      })
      .map((res) => {
        return new NgaAuthResult(
          true,
          res,
          this.getConfigValue('logout.redirect.success'),
          [],
          this.getConfigValue('messages.getter')('logout', res)
        );
      })
      .catch((res) => {
        let errors = [];
        if (res instanceof Response) {
          errors = this.getConfigValue('errors.getter')('logout', res);
        } else {
          errors.push('Something went wrong.');
        }
        return Observable.of(
          new NgaAuthResult(
            false,
            res,
            this.getConfigValue('logout.redirect.failure'),
            errors,
          ));
      });
  }
}
