/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnDestroy } from '@angular/core';
import { NgaAuthService } from '../../services/auth.service';

@Component({
  selector: 'nga-auth',
  styleUrls: ['./auth.component.scss'],
  template: `
    <nga-layout>
      <nga-layout-header>
        <span *ngIf="authenticated">Authenticated</span>
        <span *ngIf="!authenticated">Not authenticated</span>
      </nga-layout-header>
      
      <nga-layout-column>
        <div class="auth-block">
          <router-outlet></router-outlet>
        </div>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgaAuthComponent implements OnDestroy {

  // TODO: move it from here!!
  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  constructor(protected auth: NgaAuthService) {

    this.subscription = auth.onAuthenticationChange()
      .subscribe(authenticated => this.authenticated = authenticated);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
