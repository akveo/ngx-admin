/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgaAuthService, NgaAuthResult } from '../../services/auth.service';

@Component({
  selector: 'nga-logout',
  template: `
    <div>Logging out, please wait...</div>
  `,
})
export class NgaLogoutComponent {

  redirectDelay: number = 1500;

  constructor(protected service: NgaAuthService,
              protected router: Router) {
  }

  ngOnInit(): void {
    this.logout('email');
  }

  logout(provider: string): void {
    this.service.logout(provider).subscribe((result: NgaAuthResult) => {

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }
}
