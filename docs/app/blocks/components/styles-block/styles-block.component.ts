/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-styles-block',
  template: `
    <nb-card [ngxFragment]="source.slag">
      <nb-card-body>
        <h2>{{ source.name }}</h2>
        <ngx-styles-table-block [source]="source"></ngx-styles-table-block>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxStylesBlockComponent {

  @Input() source;
}
