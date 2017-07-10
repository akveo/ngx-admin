/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Input, HostBinding, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { convertToBoolProperty } from '../helpers';

/*
* TODO
*
* I want to have capability to pass custom actions in menu.
* */
export class NgaUserMenuItem {
  /**
   * Menu title
   * @type string
   */
  title: string;
  /**
   * Menu link for [routerLink] directive
   * @type string
   */
  link?: string;
  /**
   * URL for absolute urls, used directly in href
   * @type string
   */
  url?: string;
  /**
   * Link target (_blank, _self, etc)
   * @type string
   */
  target?: string;
  /**
   * Icon class
   * @type string
   */
  icon?: string;
}

/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 *
 * Can be used as a user profile link or can bring a user context menu.
 *
 * @theme
 * $nga-user-size-small: 1.5rem !default;
 * $nga-user-size-medium: 3rem !default;
 * $nga-user-size-large: 4rem !default;
 * $nga-user-picture-background: $nga-color-gray !default;
 * $nga-user-menu-border: $nga-border-color !default;
 */
@Component({
  selector: 'nga-user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class NgaUserComponent {

  // TODO: it makes sense use object instead of list of variables (or even enum)
  /*
    static readonly SIZE = {
     SMALL: 'small',
     MEDIUM: 'medium',
     LARGE: 'large',
    };
   */
  static readonly SIZE_SMALL = 'small';
  static readonly SIZE_MEDIUM = 'medium';
  static readonly SIZE_LARGE = 'large';
  static readonly SIZE_XLARGE = 'xlarge';

  private sizeValue: string;

  @HostBinding('class.inverse') inverseValue: boolean;

  @HostBinding('class.small')
  get small() {
    return this.sizeValue === NgaUserComponent.SIZE_SMALL;
  }

  @HostBinding('class.medium')
  get medium() {
    return this.sizeValue === NgaUserComponent.SIZE_MEDIUM;
  }

  @HostBinding('class.large')
  get large() {
    return this.sizeValue === NgaUserComponent.SIZE_LARGE;
  }

  @HostBinding('class.xlarge')
  get xlarge() {
    return this.sizeValue === NgaUserComponent.SIZE_XLARGE;
  }

  /**
   * Specifies a name to be shown on the right of a user picture
   * @type string
   */
  @Input() name: string = 'Anonymous';

  /**
   * Specifies a title (written in a smaller font) to be shown under the **name**
   * @type string
   */
  @Input() title: string;

  /**
   * Absolute path to a user picture
   * User name initials (JD for John Doe) will be shown if no picture specified
   * @type string
   */
  @Input() picture: string;

  /**
   * Color of the area shown when no picture specified
   * @type string
   */
  @Input() color: string;

  /**
   * List of menu items for a user context menu (shown when clicked)
   * @type NgaUserMenuItem[]
   */
  @Input() menu: NgaUserMenuItem[] = [];

  /**
   * Size of the component, small|medium|large
   * @type string
   */
  @Input()
  set size(val: string) {
    this.sizeValue = val;
  }

  /**
   * Whether to show a user name or not
   * @type boolean
   */
  @Input()
  set showName(val: boolean) {
    this.showNameValue = convertToBoolProperty(val);
  }

  /**
   * Whether to show a user title or not
   * @type boolean
   */
  @Input()
  set showTitle(val: boolean) {
    this.showTitleValue = convertToBoolProperty(val);
  }

  /**
   * Whether to show a user initials (if no picture specified) or not
   * @type boolean
   */
  @Input()
  set showInitials(val: boolean) {
    this.showInitialsValue = convertToBoolProperty(val);
  }

  /**
   * Whether to show only a picture or also show the name and title
   * @type boolean
   */
  @Input()
  set onlyPicture(val: boolean) {
    this.showNameValue = this.showTitleValue = !convertToBoolProperty(val);
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
   * Outputs when a context menu item is clicked
   * @type EventEmitter<NgaUserMenuItem>
   */
  @Output() menuClick = new EventEmitter<NgaUserMenuItem>();

  showNameValue: boolean = true;
  showTitleValue: boolean = true;
  showInitialsValue: boolean = true;
  isMenuShown: boolean = false;

  constructor(private el: ElementRef) { }

  itemClick(event: any, item: NgaUserMenuItem): boolean {
    this.menuClick.emit(item);
    return false;
  }

  /**
   * Toggles a context menu
   */
  toggleMenu() {
    this.isMenuShown = !this.isMenuShown;
  }

  @HostListener('document:click', ['$event'])
  hideMenu(event: any) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isMenuShown = false;
    }
  }

  getInitials(): string {
    if (this.name) {
      const names = this.name.split(' ');

      return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
    }

    return '';
  }

  hasMenu(): boolean {
    return this.menu && this.menu.length > 0;
  }

}
