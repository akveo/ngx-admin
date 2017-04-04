/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

/**
 * Component intended to be used within  the `<nga-card>` component.
 * It adds styles for a preset header section.
 */
@Component({
  selector: 'nga-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card.component.scss'],
  template: `
    <ng-content></ng-content>
    <ng-content select="nga-card-header"></ng-content>
    <ng-content select="nga-card-body"></ng-content>
    <ng-content select="nga-card-footer"></ng-content>
  `,
})
export class NgaCardComponent {
  title: string = 'nga-card';

  static readonly SIZE_SMALL = 'small';
  static readonly SIZE_XSMALL = 'xsmall';
  static readonly SIZE_MEDIUM = 'medium';
  static readonly SIZE_XMEDIUM = 'xmedium';
  static readonly SIZE_LARGE = 'large';

  static readonly STATUS_ACTIVE = 'active';
  static readonly STATUS_DISABLED = 'disabled';
  static readonly STATUS_PRIMARY = 'primary';
  static readonly STATUS_INFO = 'info';
  static readonly STATUS_SUCCESS = 'success';
  static readonly STATUS_WARNING = 'warning';
  static readonly STATUS_DANGER = 'danger';

  private sizeValue: string;
  private statusValue: string;

  @HostBinding('class.small-card')
  get small() {
    return this.sizeValue === NgaCardComponent.SIZE_SMALL;
  }

  @HostBinding('class.xsmall-card')
  get xsmall() {
    return this.sizeValue === NgaCardComponent.SIZE_XSMALL;
  }

  @HostBinding('class.medium-card')
  get medium() {
    return this.sizeValue === NgaCardComponent.SIZE_MEDIUM;
  }

  @HostBinding('class.xmedium-card')
  get xmedium() {
    return this.sizeValue === NgaCardComponent.SIZE_XMEDIUM;
  }

  @HostBinding('class.large-card')
  get large() {
    return this.sizeValue === NgaCardComponent.SIZE_LARGE;
  }

  @HostBinding('class.active-card')
  get active() {
    return this.statusValue === NgaCardComponent.STATUS_ACTIVE;
  }

  @HostBinding('class.disabled-card')
  get disabled() {
    return this.statusValue === NgaCardComponent.STATUS_DISABLED;
  }

  @HostBinding('class.primary-card')
  get primary() {
    return this.statusValue === NgaCardComponent.STATUS_PRIMARY;
  }

  @HostBinding('class.info-card')
  get info() {
    return this.statusValue === NgaCardComponent.STATUS_INFO;
  }

  @HostBinding('class.success-card')
  get success() {
    return this.statusValue === NgaCardComponent.STATUS_SUCCESS;
  }

  @HostBinding('class.warning-card')
  get warning() {
    return this.statusValue === NgaCardComponent.STATUS_WARNING;
  }

  @HostBinding('class.danger-card')
  get danger() {
    return this.statusValue === NgaCardComponent.STATUS_DANGER;
  }

  @Input()
  set size(val: string) {
    this.sizeValue = val;
  }

  @Input()
  set status(val: string) {
    this.statusValue = val;
  }

}
