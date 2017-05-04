/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nga-bootstrap-test',
  styles: [
    ``,
  ],
  template: `
    <nga-layout>
      <nga-layout-column>
        <h2>Buttons</h2>
        <div>
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-info">Info</button>
          <button class="btn btn-danger">Danger</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
        </div>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgaBootstrapTestComponent {

}
