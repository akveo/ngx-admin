import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tiny-mce-page',
  template: `
    <nb-card size="xlarge">
      <nb-card-body>
        <ngx-tiny-mce></ngx-tiny-mce>
      </nb-card-body>
    </nb-card>
  `,
})
export class TinyMCEComponent {
}
