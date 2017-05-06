import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tiny-mce-page',
  template: `
    <nga-card>
      <nga-card-body>
        <ngx-tiny-mce (editorKeyup)="editorKeyup($event)"></ngx-tiny-mce>
      </nga-card-body>
    </nga-card>
  `,
})
export class TinyMCEComponent {

  editorKeyup($event) {
    console.info('keyup', $event);
  }
}
