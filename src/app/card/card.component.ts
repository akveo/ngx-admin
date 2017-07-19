/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'ngt-card',
  template: `
    <nga-layout>
      <nga-layout-column>
        <nga-card *ngFor="let card of cards" [size]="card.size" [status]="card.status">
          <nga-card-header>
            <span>Header</span>
          </nga-card-header>
          <nga-card-body *ngIf="card.size !== 'xxsmall'">
            <span>Body</span>
          </nga-card-body>
          <nga-card-footer *ngIf="card.size !== 'xxsmall'">
            <span>Footer</span>
          </nga-card-footer>
        </nga-card>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class CardComponent {

  sizes = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
  statuses = ['primary', 'success', 'info', 'warning', 'danger', 'active', 'disabled'];

  cards: any[];

  constructor() {
    this.cards = this.prepareCards();
  }

  private prepareCards(): any[] {
    const result = [];

    this.statuses.forEach(status => {
      this.sizes.forEach(size => {
        result.push({
          size,
          status,
        });
      });
    });

    return result;
  }
}
