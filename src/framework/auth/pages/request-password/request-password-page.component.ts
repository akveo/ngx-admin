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
  styleUrls: ['./request-password-page.component.scss'],
  template: `
    <h2>Request password reset</h2>
    <form (ngSubmit)="requestPass('email')" #requestPassForm="ngForm">
      <div *ngIf="errors && errors.length > 0 && !submitted" class="alert alert-danger" role="alert">
        <div><strong>Oh snap!</strong></div>
        <div *ngFor="let error of errors">{{ error }}</div>
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
export class NgaRequestPasswordPageComponent {

  submitted = false;
  errors: string[] = [];
  user: NgaUser = new NgaUser();

  constructor(protected service: NgaAuthService,
              protected router: Router) {
  }

  requestPass(provider: string): void {
    this.errors = [];
    this.submitted = true;

    this.service.requestPassword(provider, this.user).subscribe((result: NgaAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        return this.router.navigate(['/']);
      }
      this.errors = result.getErrors();
    });
  }
}
