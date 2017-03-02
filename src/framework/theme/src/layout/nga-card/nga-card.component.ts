import { Component } from '@angular/core';


/**
 * A basic content container component
 *
 * While this component can be used alone, it also provides a number
 * of child components for common card sections, including:
 * - nga-card-header
 * - nga-card-body
 * - nga-card-footer
 */
@Component({
  selector: 'nga-card',
  styleUrls: ['./nga-card.component.scss'],
  template: `
    <ng-content></ng-content>
    <ng-content select="nga-card-header"></ng-content>
    <ng-content select="nga-card-body"></ng-content>
    <ng-content select="nga-card-footer"></ng-content>
  `,
})
export class NgaCardComponent {
  title: string = 'nga-card';
}
