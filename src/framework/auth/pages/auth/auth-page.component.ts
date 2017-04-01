/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nga-auth-page',
  styleUrls: ['./auth-page.component.scss'],
  template: `
    <nga-layout>
      <nga-layout-column>
        <div class="auth-block">
          <router-outlet></router-outlet>
        </div>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgaAuthPageComponent {
}
