/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxTabbedService } from '../../../@theme/services/tabbed.service';

@Component({
  selector: 'ngx-api-block',
  template: `
    <nb-card [ngxFragment]="source.slag">
      <nb-card-body>
        <h2>{{ source.name }}</h2>
        <ngx-props-block [source]="source" *ngIf="hasProps(source)"></ngx-props-block>
        <ngx-methods-block [source]="source" *ngIf="hasMethods(source)"></ngx-methods-block>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxApiBlockComponent {

  @Input('source') source;

  constructor(private tabbedService: NgxTabbedService) {
  }


  hasMethods(component) {
    return this.tabbedService.componentHasMethods(component);
  }

  hasProps(component) {
    return this.tabbedService.componentHasProps(component);
  }
}
