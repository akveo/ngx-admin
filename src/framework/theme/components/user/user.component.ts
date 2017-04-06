/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { convertToBoolProperty } from '../helpers';

export class NgaUserMenuItem {
  title: string;
  link?: string;
  icon?: string;
  target?: string;
}

@Component({
  selector: 'nga-user',
  styleUrls: ['./user.component.scss'],
  template: `
    <div class="user-container" (click)="toggleMenu()">
      <div *ngIf="picture" class="user-picture image" [ngStyle]="{background: 'url(' + picture  + ')'}"></div>
      <div *ngIf="!picture" class="user-picture background" [ngStyle]="{'background-color': color}">
        <template [ngIf]="showInitialsValue">
          {{ getInitials() }}
        </template>
      </div>

      <div class="info-container">
        <span *ngIf="showNameValue && name" class="user-name">{{ name }}</span>
        <span *ngIf="showTitleValue && title" class="user-title">{{ title }}</span>
      </div>

      <div *ngIf="menu && menu.length > 0" [ngStyle]="{display: isMenuShown ? 'block' : 'none'}" class="user-context-menu">
        <ul>
          <li class="arrow"></li>
          <li *ngFor="let item of menu">
            <span *ngIf="item.icon" class="item-icon {{ item.icon  }}"></span>
            <a *ngIf="item.link && !item.url" [routerLink]="item.link" [attr.target]="item.target">{{ item.title }}</a>
            <a *ngIf="item.url && !item.link" [attr.href]="item.url" [attr.target]="item.target">{{ item.title }}</a>
            <a *ngIf="!item.link && !item.url" href="#" [attr.target]="item.target" (click)="itemClick($event, item)">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class NgaUserComponent {

  static readonly SIZE_SMALL = 'small';
  static readonly SIZE_MEDIUM = 'medium';
  static readonly SIZE_LARGE = 'large';

  private sizeValue: string;

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

  @Input() name: string = 'Anonymous';
  @Input() title: string;
  @Input() picture: string;
  @Input() color: string;
  @Input() menu: NgaUserMenuItem[] = [];

  @Input()
  set size(val: string) {
    this.sizeValue = val;
  }
  @Input()
  set showName(val: boolean) {
    this.showNameValue = convertToBoolProperty(val);
  }
  @Input()
  set showTitle(val: boolean) {
    this.showTitleValue = convertToBoolProperty(val);
  }
  @Input()
  set showInitials(val: boolean) {
    this.showInitialsValue = convertToBoolProperty(val);
  }
  @Input()
  set onlyPicture(val: boolean) {
    this.showNameValue = this.showTitleValue = !convertToBoolProperty(val);
  }

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

  toggleMenu(): void {
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
      return names.map(n => n.charAt(0)).splice(0, 2).join(' ').toUpperCase();
    }
    return '';
  }
}
