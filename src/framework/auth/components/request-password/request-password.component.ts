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
  selector: 'nga-request-password-page',
  styleUrls: ['./request-password.component.scss'],
  template: `
    <h2>Request password reset</h2>
    <form (ngSubmit)="requestPass('email')" #requestPassForm="ngForm">

      <div *ngIf="errors && errors.length > 0 && !submitted" class="alert alert-danger" role="alert">
        <div><strong>Oh snap!</strong></div>
        <div *ngFor="let error of errors">{{ error }}</div>
      </div>
      <div *ngIf="messages && messages.length > 0 && !submitted" class="alert alert-success" role="alert">
        <div><strong>Hooray!</strong></div>
        <div *ngFor="let message of messages">{{ message }}</div>
      </div>
      
      <label for="input-email" class="sr-only">Enter your email address</label>
      <input name="email" [(ngModel)]="user.email" type="email" id="input-email" 
        class="form-control form-control-lg" placeholder="Email address" required autofocus>
      <div class="checkbox"></div>
      
      <button [disabled]="submitted || !requestPassForm.form.valid" 
        class="btn btn-lg btn-primary btn-block" type="submit">Request password</button>
    </form>
    
    <div class="links">
      <a routerLink="../login">Login</a> or <a routerLink="../register">Register</a>
    </div>
  `,
})
export class NgaRequestPasswordComponent {

  redirectDelay: number = 1500;
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: NgaUser = new NgaUser();

  constructor(protected service: NgaAuthService,
              protected router: Router) {
  }

  requestPass(provider: string): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.requestPassword(provider, this.user).subscribe((result: NgaAuthResult) => {
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
