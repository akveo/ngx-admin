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
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { List } from 'immutable';

import { NgaMenuModuleConfig, NgaMenuItem } from './menu.options';
import { NgaMenuService } from './menu.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[ngaMenuItem]',
  templateUrl: './menu-item.component.html',
})
export class NgaMenuItemComponent {

  @Input() menuItem: NgaMenuItem;

  @Output() hoverItem = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();
  @Output() selectItem = new EventEmitter<any>();
  @Output() itemClick = new EventEmitter<any>();

  constructor(private router: Router, private menuService: NgaMenuService) { }

  onToggleSubMenu(item: NgaMenuItem) {
    this.toggleSubMenu.emit(item);
  }

  onHoverItem(item: NgaMenuItem) {
    this.hoverItem.emit(item);
  }

  onSelectItem(item: NgaMenuItem) {
    this.selectItem.emit(item);
  }

  onItemClick(item: NgaMenuItem) {
    this.itemClick.emit(item);
  }

}

@Component({
  selector: 'nga-menu',
  styleUrls: ['./menu.component.scss'],
  template: `
    <ul>
      <li ngaMenuItem *ngFor="let item of menuItems"
                      [menuItem]="item"
                      (hoverItem)="onHoverItem($event)"
                      (toggleSubMenu)="onToggleSubMenu($event)"
                      (selectItem)="onSelectItem($event)"
                      (itemClick)="onItemClick($event)"></li>
    </ul>
  `,
})
export class NgaMenuComponent implements OnInit {

  @Input() tag: string;

  @Output() hoverItem = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  menuItems: List<NgaMenuItem>;

  constructor(private menuService: NgaMenuService, private router: Router) { }

  ngOnInit() {
    this.menuService.itemsChanges
      .subscribe((data: { tag: string, items: List<NgaMenuItem> }) => {
        if (!data.tag || data.tag === this.tag) {
          this.menuItems = data.items;
        }
      });

    this.menuService.prepareItems();
  }

  onHoverItem(item: NgaMenuItem) {
    this.hoverItem.emit(item);
  }

  onToggleSubMenu(item: NgaMenuItem) {
    item.expanded = !item.expanded;

    this.toggleSubMenu.emit(item);
  }

  onSelectItem(item: NgaMenuItem) {
    this.menuService.resetMenuItems(this.tag);

    item.selected = true;
  }

  onItemClick(item: NgaMenuItem) {
    this.menuService.itemClick(item, this.tag);
  }

}
