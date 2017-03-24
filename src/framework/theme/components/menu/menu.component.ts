/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

import { NgaMenuModuleConfig, NgaMenuItem } from './menu.interfaces';
import { NgaMenuService } from './menu.service';

@Component({
  selector: 'nga-menu-item',
  template: `
    <li [ngClass]="{ 'active': menuItem.selected && !menuItem.expanded }"
        [title]="menuItem.title"
        *ngIf="!menuItem.hidden">
      <a href *ngIf="!menuItem.children"
              [href]="menuItem.url"
              [target]="menuItem.target"
              (mouseenter)="onHoverItem(menuItem)">
        <i class="{{ menuItem.icon }}" *ngIf="menuItem.icon"></i>
        <span>{{ menuItem.title }}</span>
      </a>
      <a href *ngIf="menuItem.children"
              (click)="$event.preventDefault();onToogleSubMenu(menuItem)"
              [target]="menuItem.target"
              (mouseenter)="onHoverItem(menuItem)">
        <i class="{{ menuItem.icon }}" *ngIf="menuItem.icon"></i>
        <span>{{ menuItem.title }}</span>
        <i class="ion" [ngClass]="{ 'ion-chevron-down': !menuItem.expanded,
                                    'ion-chevron-up': menuItem.expanded }"></i>
      </a>
      <ul [ngClass]="{ 'menu-hidden': !(menuItem.children && menuItem.expanded),
                       'menu-visible': menuItem.expanded }">
        <nga-menu-item [menuItem]="item" *ngFor="let item of menuItem.children"
                       (hoverItem)="onHoverItem($event)"
                       (toogleSubMenu)="onToogleSubMenu($event)"></nga-menu-item>
      </ul>
    </li>
  `,
})
export class NgaMenuItemComponent {

  @Input() menuItem: NgaMenuItem;

  @Output() hoverItem = new EventEmitter<any>();
  @Output() toogleSubMenu = new EventEmitter<any>();

  onToogleSubMenu(menuItem: NgaMenuItem) {
    this.toogleSubMenu.emit(menuItem);
  }

  onHoverItem(menuItem: NgaMenuItem) {
    this.hoverItem.emit(menuItem);
  }

}

@Component({
  selector: 'nga-menu',
  styleUrls: ['./menu.component.scss'],
  template: `
    <ul>
      <nga-menu-item *ngFor="let item of menuItems"
                     [menuItem]="item"
                     (hoverItem)="onHoverItem($event)"
                     (toogleSubMenu)="onToogleSubMenu($event)"></nga-menu-item>
    </ul>
  `,
})
export class NgaMenuComponent implements OnInit {

  menuItems: Array<NgaMenuItem>;

  @Output() hoverItem = new EventEmitter<any>();
  @Output() toogleSubMenu = new EventEmitter<any>();

  constructor(private menuService: NgaMenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems()
      .subscribe((data: Array<NgaMenuItem>) => this.menuItems = data);
  }

  onHoverItem(menuItem: NgaMenuItem) {
    this.hoverItem.emit(menuItem);
  }

  onToogleSubMenu(menuItem: NgaMenuItem) {
    menuItem.expanded = !menuItem.expanded;

    this.toogleSubMenu.emit(menuItem);
  }

}
