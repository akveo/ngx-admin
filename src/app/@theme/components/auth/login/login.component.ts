/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@nebular/auth/helpers';

import { NbAuthResult, NbAuthService, NB_AUTH_OPTIONS_TOKEN } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  template: `
  <ng-auth-block>
  <h2 class="title">Sign In</h2>
  <small class="form-text sub-title">Hello! Sign in with your username or email</small>

  <form (ngSubmit)="login()" #form="ngForm" autocomplete="nope">

    <div *ngIf="showMessages.error && errors && errors.length > 0 && !submitted"
         class="alert alert-danger" role="alert">
      <div><strong>Oh snap!</strong></div>
      <div *ngFor="let error of errors">{{ error }}</div>
    </div>

    <div *ngIf="showMessages.success && messages && messages.length > 0 && !submitted"
         class="alert alert-success" role="alert">
      <div><strong>Hooray!</strong></div>
      <div *ngFor="let message of messages">{{ message }}</div>
    </div>

    <div class="form-group">
      <label for="input-username" class="sr-only">Username</label>
      <input name="username" [(ngModel)]="user.username" id="input-username"
             class="form-control" placeholder="Username" #username="ngModel"
             [class.form-control-danger]="username.invalid && username.touched" autofocus
             [required]="getConfigValue('forms.validation.username.required')">
      <small class="form-text error" *ngIf="username.invalid && username.touched && username.errors?.required">
      Username is required!
      </small>
    </div>

    <div class="form-group">
      <label for="input-password" class="sr-only">Password</label>
      <input name="password" [(ngModel)]="user.password" type="password" id="input-password"
             class="form-control" placeholder="Password" #password="ngModel"
             [class.form-control-danger]="password.invalid && password.touched"
             [required]="getConfigValue('forms.validation.password.required')"
             [minlength]="getConfigValue('forms.validation.password.minLength')"
             [maxlength]="getConfigValue('forms.validation.password.maxLength')">
      <small class="form-text error" *ngIf="password.invalid && password.touched && password.errors?.required">
        Password is required!
      </small>
      <small
        class="form-text error"
        *ngIf="password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)">
        Password should contains
        from {{ getConfigValue('forms.validation.password.minLength') }}
        to {{ getConfigValue('forms.validation.password.maxLength') }}
        characters
      </small>
    </div>

    <button [disabled]="submitted || !form.valid" class="btn btn-block btn-hero-success"
            [class.btn-pulse]="submitted">
      Sign In
    </button>
  </form>
</ng-auth-block>
  `,
})
export class NgxLoginComponent {

  redirectDelay = 0;
  showMessages: any = {};
  provider = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted = false;

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS_TOKEN) protected config = {},
              protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.provider = this.getConfigValue('forms.login.provider');
  }

  login(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.authenticate(this.provider, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;

      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }
}
