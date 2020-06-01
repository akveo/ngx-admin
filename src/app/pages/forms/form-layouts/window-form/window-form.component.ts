import { Component } from '@angular/core';
import {NbWindowRef} from '@nebular/theme';






@Component({
  template: `
    <form class="form">
      <label class="label">Accion:</label> 
 
    </form>
  `,
  styleUrls: ['window-form.component.scss'],
})
export class WindowFormComponent {
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
