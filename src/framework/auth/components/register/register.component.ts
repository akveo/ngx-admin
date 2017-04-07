/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgaUser } from '../../models/user';
import { NgaAuthService, NgaAuthResult } from '../../services/auth.service';
import { NgaTokenService } from '../../services/token.service';

@Component({
  selector: 'nga-register',
  styleUrls: ['./register.component.scss'],
  template: `
    <h2>Create new account</h2>
    <form (ngSubmit)="register('email')" #registerForm="ngForm">
      <div *ngIf="errors && errors.length > 0 && !submitted" class="alert alert-danger" role="alert">
        <div><strong>Oh snap!</strong></div>
        <div *ngFor="let error of errors">{{ error }}</div>
      </div>
      <div *ngIf="messages && messages.length > 0 && !submitted" class="alert alert-success" role="alert">
        <div><strong>Hooray!</strong></div>
        <div *ngFor="let message of messages">{{ message }}</div>
      </div>
      
      <label for="input-name" class="sr-only">Full name</label>
      <input name="fullName" [(ngModel)]="user.fullName" type="text" id="input-name" 
        class="form-control form-control-lg first" placeholder="Full name" autofocus>
      
      <label for="input-email" class="sr-only">Email address</label>
      <input name="email" [(ngModel)]="user.email" type="email" id="input-email" 
        class="form-control form-control-lg middle" placeholder="Email address" required>
      
      <label for="input-password" class="sr-only">Password</label>
      <input name="password" [(ngModel)]="user.password" type="password" id="input-password" 
        class="form-control form-control-lg middle" placeholder="Password" required>
      
      <label for="input-re-password" class="sr-only">Repeat password</label>
      <input name="confirmPassword" [(ngModel)]="user.confirmPassword" type="password" id="input-re-password" 
        class="form-control form-control-lg last" placeholder="Confirm Password" required>
      
      <div class="checkbox">
        <label>
          <input name="rememberMe" [(ngModel)]="user.rememberMe" 
            type="checkbox" value="remember-me"> Agree to <a href="#" target="_blank">Terms & Conditions</a>
        </label>
      </div>
      <button [disabled]="submitted || !registerForm.form.valid" 
        class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
    
    <div class="links">
      Already have an account? <a routerLink="../login">Sign in</a>
    </div>
  `,
})
export class NgaRegisterComponent {

  redirectDelay: number = 1500;
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: NgaUser = new NgaUser();

  constructor(protected service: NgaAuthService,
              protected tokenService: NgaTokenService,
              protected router: Router) {
  }

  register(provider: string): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.register(provider, this.user).subscribe((result: NgaAuthResult) => {
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
}
