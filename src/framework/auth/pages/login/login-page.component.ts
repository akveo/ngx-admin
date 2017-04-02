/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgaUser } from '../../models/user';
import { NgaAuthService, NgaAuthResult } from '../../services/auth.service';

@Component({
  selector: 'nga-login-page',
  styleUrls: ['./login-page.component.scss'],
  template: `
    <h2>Please sign in</h2>
    <form (ngSubmit)="login('email')" #loginForm="ngForm">
      <div *ngIf="errors && errors.length > 0 && !submitted" class="alert alert-danger" role="alert">
        <div><strong>Oh snap!</strong></div>
        <div *ngFor="let error of errors">{{ error }}</div>
      </div>
      <label for="input-email" class="sr-only">Email address</label>
      <input name="email" [(ngModel)]="user.email" type="email" id="input-email" 
        class="form-control form-control-lg first" placeholder="Email address" required autofocus>
        
      <label for="input-password" class="sr-only">Password</label>
      <input name="password" [(ngModel)]="user.password" type="password" id="input-password" 
        class="form-control form-control-lg last" placeholder="Password" required>
        
      <div class="checkbox">
        <label>
          <input name="rememberMe" [(ngModel)]="user.rememberMe" type="checkbox" value="remember-me"> Remember me
        </label>
        <a routerLink="../request-password">Forgot Password</a>
      </div>
      <button [disabled]="submitted || !loginForm.form.valid" 
        class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    
    <div class="links">
      Don't have an account? <a routerLink="../register">Register</a>
    </div>
  `,
})
export class NgaLoginPageComponent {

  submitted = false;
  errors: string[] = [];
  user: NgaUser = new NgaUser();

  constructor(protected service: NgaAuthService,
              protected router: Router) {
  }

  login(provider: string): void {
    this.errors = [];
    this.submitted = true;

    this.service.authenticate(provider, this.user).subscribe((result: NgaAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        return this.router.navigate(['/']);
      }
      this.errors = result.getErrors();
    });
  }
}
