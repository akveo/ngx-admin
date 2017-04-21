/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnDestroy } from '@angular/core';
import { NgaAuthService } from '../services/auth.service';

@Component({
  selector: 'nga-auth',
  template: `
    <nga-layout>
      <nga-layout-column>
        <nga-auth-block></nga-auth-block>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgaAuthComponent implements OnDestroy {

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  // showcase of how to use the onAuthenticationChange method
  constructor(protected auth: NgaAuthService) {

    this.subscription = auth.onAuthenticationChange()
      .subscribe((authenticated: boolean) => {
        this.authenticated = authenticated;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
