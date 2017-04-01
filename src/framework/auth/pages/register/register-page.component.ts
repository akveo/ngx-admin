/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nga-register-page',
  styleUrls: ['./register-page.component.scss'],
  template: `
    <h2>Create new account</h2>
    <form>
      <label for="input-name" class="sr-only">Full name</label>
      <input type="email" id="input-name" class="form-control form-control-lg first" placeholder="Full name" autofocus>
      
      <label for="input-email" class="sr-only">Email address</label>
      <input type="email" id="input-email" class="form-control form-control-lg middle" placeholder="Email address" required>
      
      <label for="input-password" class="sr-only">Password</label>
      <input type="password" id="input-password" class="form-control form-control-lg middle" placeholder="Password" required>
      
      <label for="input-re-password" class="sr-only">Repeat password</label>
      <input type="password" id="input-re-password" class="form-control form-control-lg last" placeholder="Confirm Password" required>
      
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me"> Agree to <a href="#" target="_blank">Terms & Conditions</a>
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
    
    <div class="links">
      Already have an account? <a routerLink="../login">Sign in</a>
    </div>
  `,
})
export class NgaRegisterPageComponent {
}
