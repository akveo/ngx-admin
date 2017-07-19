/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Input, HostBinding } from '@angular/core';

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
  styleUrls: ['./card.component.scss'],
  template: `
    <ng-content></ng-content>
    <ng-content select="nga-card-header"></ng-content>
    <ng-content select="nga-card-body"></ng-content>
    <ng-content select="nga-card-footer"></ng-content>
  `,
})
export class NgaCardComponent {

  static readonly SIZE_XXSMALL = 'xxsmall';
  static readonly SIZE_XSMALL = 'xsmall';
  static readonly SIZE_SMALL = 'small';
  static readonly SIZE_MEDIUM = 'medium';
  static readonly SIZE_LARGE = 'large';
  static readonly SIZE_XLARGE = 'xlarge';
  static readonly SIZE_XXLARGE = 'xxlarge';

  static readonly STATUS_ACTIVE = 'active';
  static readonly STATUS_DISABLED = 'disabled';
  static readonly STATUS_PRIMARY = 'primary';
  static readonly STATUS_INFO = 'info';
  static readonly STATUS_SUCCESS = 'success';
  static readonly STATUS_WARNING = 'warning';
  static readonly STATUS_DANGER = 'danger';

  size: string;
  status: string;

  @HostBinding('class.xxsmall-card')
  private get xxsmall() {
    return this.size === NgaCardComponent.SIZE_XXSMALL;
  }

  @HostBinding('class.xsmall-card')
  private get xsmall() {
    return this.size === NgaCardComponent.SIZE_XSMALL;
  }

  @HostBinding('class.small-card')
  private get small() {
    return this.size === NgaCardComponent.SIZE_SMALL;
  }

  @HostBinding('class.medium-card')
  private get medium() {
    return this.size === NgaCardComponent.SIZE_MEDIUM;
  }

  @HostBinding('class.large-card')
  private get large() {
    return this.size === NgaCardComponent.SIZE_LARGE;
  }

  @HostBinding('class.xlarge-card')
  private get xlarge() {
    return this.size === NgaCardComponent.SIZE_XLARGE;
  }

  @HostBinding('class.xxlarge-card')
  private get xxlarge() {
    return this.size === NgaCardComponent.SIZE_XXLARGE;
  }

  @HostBinding('class.active-card')
  private get active() {
    return this.status === NgaCardComponent.STATUS_ACTIVE;
  }

  @HostBinding('class.disabled-card')
  private get disabled() {
    return this.status === NgaCardComponent.STATUS_DISABLED;
  }

  @HostBinding('class.primary-card')
  private get primary() {
    return this.status === NgaCardComponent.STATUS_PRIMARY;
  }

  @HostBinding('class.info-card')
  private get info() {
    return this.status === NgaCardComponent.STATUS_INFO;
  }

  @HostBinding('class.success-card')
  private get success() {
    return this.status === NgaCardComponent.STATUS_SUCCESS;
  }

  @HostBinding('class.warning-card')
  private get warning() {
    return this.status === NgaCardComponent.STATUS_WARNING;
  }

  @HostBinding('class.danger-card')
  private get danger() {
    return this.status === NgaCardComponent.STATUS_DANGER;
  }

  @Input('size')
  private set setSize(val: string) {
    this.size = val;
  }

  @Input('status')
  private set setStatus(val: string) {
    this.status = val;
  }
}
