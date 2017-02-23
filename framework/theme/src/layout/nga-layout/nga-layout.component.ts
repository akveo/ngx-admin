import { Component } from '@angular/core';

/**
 * A basic content container component
 *
 * While this component can be used alone, it also provides a number
 * of child components for common layout sections, including:
 * - nga-layout-sidebar
 * - nga-layout-content
 */
@Component({
  selector: 'nga-layout',
  styleUrls: ['./nga-layout.component.scss'],
  template: `
    <ng-content></ng-content>
    <ng-content select="nga-layout-sidebar"></ng-content>
    <ng-content select="nga-layout-content"></ng-content>
  `,
})
export class NgaLayoutComponent {
}
