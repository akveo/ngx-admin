/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, ContentChild, HostBinding } from '@angular/core';
import { convertToBoolProperty } from '../helpers';

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

  @HostBinding('class.right') rightValue: boolean;

  @HostBinding('class.left') leftValue: boolean;


  @Input()
  set right(val: boolean) {
    this.rightValue = convertToBoolProperty(val);
  }
  @Input()
  set left(val: boolean) {
    this.leftValue = convertToBoolProperty(val);
  }
}

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset header section.
 */
@Component({
  selector: 'nga-layout-header',
  template: `
    <nav class="navbar" [ngClass]="{'fixed-top': fixedValue}">
      <div class="container-fluid">
        <ng-content></ng-content>
      </div>
    </nav>
  `,
})
export class NgaLayoutHeaderComponent {

  @HostBinding('class.fixed') fixedValue: boolean;

  @Input()
  set fixed(val: boolean) {
    this.fixedValue = convertToBoolProperty(val);
  }

}

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset footer section.
 */
@Component({
  selector: 'nga-layout-footer',
  template: `
    <nav class="navbar" [ngClass]="{'fixed-bottom': fixedValue}">
      <div class="container-fluid">
        <ng-content></ng-content>
      </div>
    </nav>
  `,
})
export class NgaLayoutFooterComponent {

  @HostBinding('class.fixed') fixedValue: boolean;

  @Input()
  set fixed(val: boolean) {
    this.fixedValue = convertToBoolProperty(val);
  }

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
  styleUrls: ['./layout.component.scss'],
  template: `
    <ng-content select="nga-layout-header"></ng-content>
    <div class="main-container">
      <ng-content select="nga-sidebar[left]"></ng-content>
      <ng-content select="nga-sidebar"></ng-content>
      <div class="content">
        <div class="columns">
          <ng-content></ng-content>
          <ng-content select="nga-layout-column"></ng-content>
        </div>
        <ng-content select="nga-layout-footer"></ng-content>
      </div>
      <ng-content select="nga-sidebar[right]"></ng-content>
    </div>
  `,
})
export class NgaLayoutComponent {

  @HostBinding('class.center') centerValue: boolean = false;

  @Input()
  set center(val: boolean) {
    this.centerValue = convertToBoolProperty(val);
  }

}
