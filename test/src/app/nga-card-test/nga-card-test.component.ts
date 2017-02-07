import { Component } from '@angular/core';

@Component({
  selector: 'nga-card-test',
  template: `
    <nga-card>
      <nga-card-header>
        <h3>Header</h3>
      </nga-card-header>
      <nga-card-body>
        <h3>Body</h3>
      </nga-card-body>
      <nga-card-footer>
        <h3>Footer</h3>
      </nga-card-footer>
    </nga-card>
  `,
})
export class NgaCardTestComponent {
}
