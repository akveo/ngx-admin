/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  Component,
  Input,
  HostBinding,
} from '@angular/core';

import { convertToBoolProperty } from '../helpers';

/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
@Component({
  selector: 'nga-action',
  template: `
    <a href="#" *ngIf="icon; else showContent" (click)="$event.preventDefault()">
      <i class="control-icon {{ icon }}"></i>
    </a>
    <ng-template #showContent>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class NgaActionComponent {

  @HostBinding('class.disabled') disabledValue: boolean = false;

  /**
   * Icon class to display
   * @type string
   */
  @Input() icon: string;

  /**
   * Disables the item (changes item opacity and mouse cursor)
   * @type boolean
   */
  @Input()
  set disabled(val: boolean) {
    this.disabledValue = convertToBoolProperty(val);
  }
}

/**
 * Shows a a horizontal list of actions, available in multiple sizes
 * Aligns items vertically.
 *
 * @theme
 * $nga-actions-size-small: 1.5rem !default;
 * $nga-actions-size-medium: 2.5rem !default;
 * $nga-actions-size-large: 4rem !default;
 * $nga-actions-color: $nga-color-inverse !default;
 * $nga-actions-background: transparent !default;
 * $nga-actions-color-inverse: $nga-color-default !default;
 * $nga-actions-background-inverse: $nga-background-inverse !default;
 */
@Component({
  selector: 'nga-actions',
  styleUrls: ['./actions.component.scss'],
  template: `
    <ng-content select="nga-action"></ng-content>
  `,
})
export class NgaActionsComponent {

  static readonly SIZE_SMALL = 'small';
  static readonly SIZE_MEDIUM = 'medium';
  static readonly SIZE_LARGE = 'large';

  private sizeValue: string;

  @HostBinding('class.inverse') inverseValue: boolean;

  @HostBinding('class.small')
  get small() {
    return this.sizeValue === NgaActionsComponent.SIZE_SMALL;
  }

  @HostBinding('class.medium')
  get medium() {
    return this.sizeValue === NgaActionsComponent.SIZE_MEDIUM;
  }

  @HostBinding('class.large')
  get large() {
    return this.sizeValue === NgaActionsComponent.SIZE_LARGE;
  }

  @HostBinding('class.full-width')
  private fullWidthValue: boolean = false;

  /**
   * Size of the component, small|medium|large
   * @type string
   */
  @Input()
  set size(val: string) {
    this.sizeValue = val;
  }

  /**
   * Makes colors inverse based on current theme
   * @type boolean
   */
  @Input()
  set inverse(val: boolean) {
    this.inverseValue = convertToBoolProperty(val);
  }

  /**
   * Component will fill full width of the container
   * @type boolean
   */
  @Input()
  set fullWidth(val: boolean) {
    this.fullWidthValue = convertToBoolProperty(val);
  }
}
