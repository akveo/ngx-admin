import { Component } from '@angular/core';

/**
 * Component intended to be used within  the `<nga-card>` component.
 * It adds styles for a preset body section.
 */
@Component({
  selector: 'nga-card-body',
  styleUrls: ['./nga-card-body.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class NgaCardBodyComponent {
}
