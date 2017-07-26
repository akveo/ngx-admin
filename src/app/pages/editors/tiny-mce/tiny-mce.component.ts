import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tiny-mce-page',
  template: `
    <nga-card size="xlarge">
      <nga-card-body>
        <ngx-tiny-mce></ngx-tiny-mce>
      </nga-card-body>
    </nga-card>
  `,
})
export class TinyMCEComponent {
}
