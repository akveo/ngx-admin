
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-prop-block',
  template: `
    <h3>{{ name }}</h3>
    <table>
      <thead>
      <tr>
        <td width="25%">Name</td>
        <td width="20%">Type</td>
        <td>Description</td>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let prop of properties">
        <td>{{ prop.name }}</td>
        <td><code *ngIf="prop.type">{{ prop.type }}</code></td>
        <td>
          <div *ngIf="prop.shortDescription" ngxDescription>{{ prop.shortDescription }}</div>
          <div *ngIf="prop.description" ngxDescription>{{ prop.description }}</div>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxPropBlockComponent {

  @Input() properties = [];
  @Input() name;
  @Input() slag;
}
