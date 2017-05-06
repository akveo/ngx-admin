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

  private stack = List<NgaMenuItem>();

  constructor(private menuService: NgaMenuService, private router: Router) { }

  ngOnInit() {
    this.menuService.itemsChangesSuggest
      .subscribe((data: { tag: string, items: List<NgaMenuItem> }) => {
        if (!data.tag || data.tag === this.tag) {
          this.menuItems = data.items;

          this.menuService.prepareItems(this.menuItems);
        }
      });

    this.menuService.addItemsSuggest
      .subscribe((data: { tag: string, items: List<NgaMenuItem> }) => {
        if (!data.tag || data.tag === this.tag) {
          this.menuItems = this.menuItems.push(...data.items.toJS());

          this.menuService.prepareItems(this.menuItems);
        }
      });

    this.menuService.navigateHomeSuggest
      .subscribe((data: { tag: string }) => {
        if (!data.tag || data.tag === this.tag) {
          this.navigateHome();
        }
      });

    this.menuItems = this.menuService.getItems();

    this.menuService.prepareItems(this.menuItems);
  }

  onHoverItem(item: NgaMenuItem) {
    this.hoverItem.emit(item);
  }

  onToggleSubMenu(item: NgaMenuItem) {
    item.expanded = !item.expanded;

    this.toggleSubMenu.emit(item);
  }

  onSelectItem(item: NgaMenuItem) {
    this.menuService.resetItems(this.menuItems);

    item.selected = true;
  }

  onItemClick(item: NgaMenuItem) {
    this.menuService.itemClick(item, this.tag);
  }

  private navigateHome() {
    let homeItem: NgaMenuItem;

    this.menuItems.forEach(i => {
      const result = this.getHomeItem(i);

      if (result) {
        homeItem = result;
      }
    });

    this.stack = this.stack.clear();

    if (homeItem) {
      this.menuService.resetItems(this.menuItems);

      homeItem.selected = true;

      if (homeItem.link) {
        this.router.navigate([homeItem.link]);
      }

      if (homeItem.url) {
        window.location.href = homeItem.url;
      }
    }
  }

  private getHomeItem(parent: NgaMenuItem): NgaMenuItem {
    this.stack = this.stack.push(parent);

    if (parent.home) {
      return parent;
    }

    if (parent.children && parent.children.size > 0) {
      const first = parent.children.filter(c => !this.stack.contains(c)).first();

      if (first) {
        return this.getHomeItem(first);
      }
    }

    if (parent.parent) {
      return this.getHomeItem(parent.parent);
    }
  }

}
