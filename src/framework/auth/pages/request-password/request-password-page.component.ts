/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nga-request-password-page',
  styleUrls: ['./request-password-page.component.scss'],
  template: `
    <h2>Request password reset</h2>
    <form>
      <label for="input-email" class="sr-only">Enter your email address</label>
      <input type="email" id="input-email" class="form-control form-control-lg" placeholder="Email address" required autofocus>
      <div class="checkbox"></div>
      
      <button class="btn btn-lg btn-primary btn-block" type="submit">Request password</button>
    </form>
    
    <div class="links">
      <a routerLink="../login">Login</a> or <a routerLink="../register">Register</a>
    </div>
  `,
})
export class NgaRequestPasswordPageComponent {
}
