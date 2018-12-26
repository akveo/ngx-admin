/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-examples-block',
  template: `
    <nb-card [ngxFragment]="source.slag">
      <nb-card-body>
        <h2>{{ source.name }}</h2>
        <ngx-stacked-example-block *ngFor="let example of source.liveExamples" [content]="example.content"
                                   class="widget-block">
        </ngx-stacked-example-block>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxExamplesBlockComponent {

  @Input('source') source;

}
