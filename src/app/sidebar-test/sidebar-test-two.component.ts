/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'nga-sidebar-test-one',
  styles: [
    `
    :host /deep/ nga-layout-column {
      background-color: #76ecff;
    }
    `,
  ],
  template: `
    <nga-layout>

      <nga-layout-header></nga-layout-header>

      <nga-sidebar>
        Left
      </nga-sidebar>

      <nga-sidebar right fixed>
        Right
      </nga-sidebar>

      <nga-layout-footer></nga-layout-footer>

    </nga-layout>
`,
})
export class NgaSidebarTestTwoComponent {
}
