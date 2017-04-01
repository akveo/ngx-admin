/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nga-reset-password-page',
  styleUrls: ['./reset-password-page.component.scss'],
  template: `
    <h2>Change password</h2>
    <form>
      <label for="input-password" class="sr-only">New Password</label>
      <input type="password" id="input-password" class="form-control form-control-lg first" placeholder="New Password" required autofocus>
      
      <label for="input-re-password" class="sr-only">Confirm Password</label>
      <input type="password" id="input-re-password" class="form-control form-control-lg last" placeholder="Confirm Password" required>
      
      <div class="checkbox"></div>
      
      <button class="btn btn-lg btn-primary btn-block" type="submit">Change password</button>
    </form>
    
    <div class="links">
      <a routerLink="../login">Login</a> or <a routerLink="../register">Register</a>
    </div>
  `,
})
export class NgaResetPasswordPageComponent {
}
