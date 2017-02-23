import { Component } from '@angular/core';

/**
 * Component intended to be used within  the `<nga-card>` component.
 * It adds styles for a preset footer section.
 */
@Component({
  selector: 'nga-card-footer',
  styleUrls: ['./nga-card-footer.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class NgaCardFooterComponent {
}
