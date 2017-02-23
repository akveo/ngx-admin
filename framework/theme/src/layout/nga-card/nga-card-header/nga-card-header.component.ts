import { Component } from '@angular/core';

/**
 * Component intended to be used within  the `<nga-card>` component.
 * It adds styles for a preset header section.
 */
@Component({
  selector: 'nga-card-header',
  styleUrls: ['./nga-card-header.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class NgaCardHeaderComponent {
}
