/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nga-card-test',
  template: `
    <nga-card>
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card size="small">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card size="xsmall">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card size="medium">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card size="xmedium">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card size="large">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card status="primary">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card status="success">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card status="info">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card status="warning">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card status="danger">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card status="active">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card status="disabled">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
    <nga-card *ngFor="let card of cards" [size]="card.size" [status]="card.status">
      <nga-card-header>
        <span>Header</span>
      </nga-card-header>
      <nga-card-body>
        <span>Body</span>
      </nga-card-body>
      <nga-card-footer>
        <span>Footer</span>
      </nga-card-footer>
    </nga-card>
  `,
})
export class NgaCardTestComponent {

  sizes = ['small', 'xsmall', 'medium', 'xmedium', 'large'];
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
          size: size,
          status: status,
        });
      });
    });

    return result;
  }
}
