/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nga-login-page',
  styleUrls: ['./login-page.component.scss'],
  template: `
    <h2>Please sign in</h2>
    <form>
      <label for="input-email" class="sr-only">Email address</label>
      <input type="email" id="input-email" class="form-control form-control-lg first" placeholder="Email address" required autofocus>
      <label for="input-password" class="sr-only">Password</label>
      <input type="password" id="input-password" class="form-control form-control-lg last" placeholder="Password" required>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
        <a routerLink="../request-password">Forgot Password</a>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    
    <div class="links">
      Don't have an account? <a routerLink="../register">Register</a>
    </div>
  `,
})
export class NgaLoginPageComponent {
}
