import { Component } from '@angular/core';

@Component({
  selector: 'nga-card-test',
  template: `
    <nga-card id="default-card">
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
    <nga-card small id="small-card">
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
    <nga-card xsmall id="xsmall-card">
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
    <nga-card medium id="medium-card">
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
    <nga-card xmedium id="xmedium-card">
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
    <nga-card large id="large-card">
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
    <nga-card primary id="primary-card">
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
    <nga-card success id="success-card">
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
    <nga-card info id="info-card">
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
    <nga-card warning id="warning-card">
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
    <nga-card danger id="danger-card">
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
}
