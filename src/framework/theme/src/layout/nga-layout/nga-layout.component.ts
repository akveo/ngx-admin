import { Component } from '@angular/core';

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset column section.
 */
@Component({
  selector: 'nga-layout-column',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaLayoutColumnComponent {
}

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset header section.
 */
@Component({
  selector: 'nga-layout-header',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaLayoutHeaderComponent {
}


/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset body section.
 */
@Component({
  selector: 'nga-layout-content',
  template: `<ng-content></ng-content>`,
})
export class NgaLayoutContentComponent {
}

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset footer section.
 */
@Component({
  selector: 'nga-layout-footer',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaLayoutFooterComponent {
}

/**
 * A basic content container component
 *
 * While this component can be used alone, it also provides a number
 * of child components for common layout sections, including:
 * - nga-layout-sidebar
 * - nga-layout-column
 * - nga-layout-content
 * - nga-layout-header
 * - nga-layout-footer
 */
@Component({
  selector: 'nga-layout',
  styleUrls: ['./nga-layout.component.scss'],
  template: `
    <ng-content></ng-content>
    <ng-content select="nga-layout-header"></ng-content>
    <ng-content select="nga-layout-column"></ng-content>
    <ng-content select="nga-layout-sidebar"></ng-content>
    <ng-content select="nga-layout-content"></ng-content>
    <ng-content select="nga-layout-footer"></ng-content>
  `,
})
export class NgaLayoutComponent {
}
