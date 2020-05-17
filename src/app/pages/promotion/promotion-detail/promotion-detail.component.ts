import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  template: `
    <form class="form">
      <label for="subject">Subject:</label>
      <input nbInput id="subject" type="text">

      <label class="text-label" for="text">Text:</label>
      <textarea nbInput id="text"></textarea>
    </form>
  `,
  styleUrls: ['promotion-detail.component.scss'],
})
export class PromotionDetailComponent {
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
