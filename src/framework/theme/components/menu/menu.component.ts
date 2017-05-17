/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { List } from 'immutable';

import { NgaMenuService } from './menu.service';
import { NgaMenuItem } from './menu.options';
import { convertToBoolProperty } from '../helpers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[ngaMenuItem]',
  templateUrl: './menu-item.component.html',
})
export class NgaMenuItemComponent {

  @Input() menuItem = <NgaMenuItem>null;

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
      <li ngaMenuItem *ngFor="let item of items"
                      [menuItem]="item"
                      [class.expanded]="item.expanded"
                      [class.collapsed]="!item.expanded"
                      (hoverItem)="onHoverItem($event)"
                      (toggleSubMenu)="onToggleSubMenu($event)"
                      (selectItem)="onSelectItem($event)"
                      (itemClick)="onItemClick($event)"></li>
    </ul>
  `,
})
export class NgaMenuComponent implements OnInit, OnDestroy {

  @HostBinding('class.inverse') inverseValue: boolean;

  @Input() tag: string;
  @Input() items: List<NgaMenuItem>;

  /**
   * Makes colors inverse based on current theme
   * @type boolean
   */
  @Input()
  set inverse(val: boolean) {
    this.inverseValue = convertToBoolProperty(val);
  }

  @Output() hoverItem = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  private stack = List<NgaMenuItem>();

  private addItemSubscription: Subscription;
  private navigateHomeSubscription: Subscription;
  private getSelectedItemSubscription: Subscription;

  constructor(private menuService: NgaMenuService, private router: Router) { }

  ngOnInit() {
    this.addItemSubscription = this.menuService.onAddItem()
      .subscribe((data: { tag: string, items: List<NgaMenuItem> }) => {
        if (this.compareTag(data.tag)) {
          this.items = this.items.push(...data.items.toJS());

          this.menuService.prepareItems(this.items);
        }
      });

    this.navigateHomeSubscription = this.menuService.onNavigateHome()
      .subscribe((data: { tag: string }) => {
        if (this.compareTag(data.tag)) {
          this.navigateHome();
        }
      });

    this.getSelectedItemSubscription = this.menuService.onGetSelectedItem()
      .subscribe((data: { tag: string, listener: BehaviorSubject<{ tag: string, item: NgaMenuItem }> }) => {

        let selectedItem: NgaMenuItem;

        this.items.forEach(i => {
          const result = this.getSelectedItem(i);

          if (result) {
            selectedItem = result;

            return;
          }
        });

        this.clearStack();

        data.listener.next({ tag: this.tag, item: selectedItem });
      });

    this.items = this.items.push(...this.menuService.getItems().toJS());

    this.menuService.prepareItems(this.items);
  }

  ngOnDestroy() {
    this.addItemSubscription.unsubscribe();
    this.navigateHomeSubscription.unsubscribe();
    this.getSelectedItemSubscription.unsubscribe();
  }

  onHoverItem(item: NgaMenuItem) {
    this.hoverItem.emit(item);
  }

  onToggleSubMenu(item: NgaMenuItem) {
    item.expanded = !item.expanded;

    this.toggleSubMenu.emit(item);
  }

  onSelectItem(item: NgaMenuItem) {
    this.menuService.resetItems(this.items);

    item.selected = true;
  }

  onItemClick(item: NgaMenuItem) {
    this.menuService.itemClick(item, this.tag);
  }

  private navigateHome() {
    let homeItem: NgaMenuItem;

    this.items.forEach(i => {
      const result = this.getHomeItem(i);

      if (result) {
        homeItem = result;
      }
    });

    this.clearStack();

    if (homeItem) {
      this.menuService.resetItems(this.items);

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

  private clearStack() {
    this.stack = this.stack.clear();
  }

  private compareTag(tag: string) {
    return !tag || tag === this.tag;
  }

  private getSelectedItem(parent: NgaMenuItem): NgaMenuItem {

    this.stack = this.stack.push(parent);

    if (parent.selected) {
      return parent;
    }

    if (parent.children && parent.children.size > 0) {
      const first = parent.children.filter(c => !this.stack.contains(c)).first();

      if (first) {
        return this.getSelectedItem(first);
      }
    }

    if (parent.parent) {
      return this.getSelectedItem(parent.parent);
    }
  }

}
