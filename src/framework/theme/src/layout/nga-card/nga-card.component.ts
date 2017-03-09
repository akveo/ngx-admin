import { Component } from '@angular/core';

/**
 * Component intended to be used within  the `<nga-card>` component.
 * It adds styles for a preset header section.
 */
@Component({
  selector: 'nga-card-header',
  template: `<ng-content></ng-content>`,
})
export class NgaCardHeaderComponent {
}

/**
 * Component intended to be used within  the `<nga-card>` component.
 * It adds styles for a preset body section.
 */
@Component({
  selector: 'nga-card-body',
  template: `<ng-content></ng-content>`,
})
export class NgaCardBodyComponent {
}

/**
 * Component intended to be used within  the `<nga-card>` component.
 * It adds styles for a preset footer section.
 */
@Component({
  selector: 'nga-card-footer',
  template: `<ng-content></ng-content>`,
})
export class NgaCardFooterComponent {
}

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
