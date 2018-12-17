/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxStylesService } from '../../../@theme/services/styles.service';

@Component({
  selector: 'ngx-styles-table-block',
  template: `
    <table class="striped" *ngFor="let style of classStyles">
      <thead>
      <tr>
        <td>Name</td>
        <td *ngFor="let themedValue of style.styles[0].themedValues">{{ themedValue.theme }}</td>
        <td>Description</td>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let item of style.styles">
        <td>{{ item.name }}</td>
        <td *ngFor="let themedValue of item.themedValues" ngxColorSwatch>{{ themedValue.value }}</td>
        <td>
          <p *ngIf="item.shortDescription" ngxDescription>{{ item.shortDescription}}</p>
          <p *ngIf="item.description" ngxDescription>{{ item.description }}</p>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxStylesTableBlockComponent {

  classStyles: any;

  @Input('source')
  set setSource(source: any) {
    this.classStyles = this.stylesService.mapThemedValues(source.styles);
  }

  constructor(private stylesService: NgxStylesService) {
  }

}
