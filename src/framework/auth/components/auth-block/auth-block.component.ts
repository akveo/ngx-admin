/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nga-auth-block',
  styleUrls: ['./auth-block.component.scss'],
  template: `
    <div class="auth-block">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class NgaAuthBlockComponent {
}
