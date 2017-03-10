import { Component, Input, ContentChild } from '@angular/core';

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
    <nav class="navbar" [ngClass]="{'fixed-top': fixed === '' || fixed}">
      <div class="container-fluid">
        <ng-content></ng-content>
      </div>
    </nav>
  `,
})
export class NgaLayoutHeaderComponent {
  @Input() fixed;
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
    <nav class="navbar" [ngClass]="{'fixed-bottom': fixed === '' || fixed}">
      <div class="container-fluid">
        <ng-content></ng-content>
      </div>
    </nav>
  `,
})
export class NgaLayoutFooterComponent {
  @Input() fixed;
}

/**
 * A basic content container component
 *
 * While this component can be used alone, it also provides a number
 * of child components for common layout sections, including:
 * // TODO: layout parameters (fluid, center)
 * - nga-layout-sidebar
 * - nga-layout-column
 * - nga-layout-content
 * - nga-layout-header
 * - nga-layout-footer
 */
@Component({
  selector: 'nga-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
    <ng-content select="nga-layout-header"></ng-content>
    <div class="container-fluid main-container" [ngClass]="{'with-footer': footer}">
      <ng-content></ng-content>
      <ng-content select="nga-layout-column"></ng-content>
      <ng-content select="nga-layout-sidebar"></ng-content>
      <ng-content select="nga-layout-content"></ng-content>
    </div>
    <ng-content select="nga-layout-footer"></ng-content>
  `,
})
export class NgaLayoutComponent {

  @ContentChild(NgaLayoutFooterComponent) footer;
}
