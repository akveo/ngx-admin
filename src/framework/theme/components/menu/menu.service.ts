/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { NgaMenuItem, NgaMenuModuleConfig } from './menu.options';

@Injectable()
export class NgaMenuService {

  private menuItemsChanges$ = new Subject();
  private addItemsChanges$ = new Subject();
  private itemClickChanges$ = new Subject();

  menuItemsChanges: Observable<{ tag: string, items: List<NgaMenuItem> }> = this.menuItemsChanges$.asObservable();

  addMenuChanges: Observable<{ tag: string, item: NgaMenuItem }> = this.addItemsChanges$.asObservable();

  itemClickChanges: Observable<{ tag: string, item: NgaMenuItem }> = this.itemClickChanges$.asObservable();

  constructor(private router: Router) { }

  prepareMenuItems(items: List<NgaMenuItem>, tag?: string) {
    items.forEach(i => this.setParent(i));
    items.forEach(i => this.prepareMenu(i));

    this.menuItemsChanges$.next({
      tag,
      items,
    });
  }

  resetMenuItems(items: List<NgaMenuItem>, tag?: string) {
    items.forEach(i => this.resetMenu(i));

    this.menuItemsChanges$.next({
      tag,
      items,
    });
  }

  private setParent(parent: NgaMenuItem) {
    if (parent.children && parent.children.size > 0) {
      const firstItemWithoutParent = parent.children.filter(c => c.parent === null || c.parent === undefined).first();

      if (firstItemWithoutParent) {
        firstItemWithoutParent.parent = parent;

        this.setParent(firstItemWithoutParent);
      }
    } else if (parent.parent) {
      this.setParent(parent.parent);
    }
  }

  private prepareMenu(parent: any) {
    parent.checked = true;

    if (parent.children && parent.children.size > 0) {
      const firstUnchecked = parent.children.filter((c: any) => !c.checked).first();

      if (firstUnchecked) {
        firstUnchecked.checked = true;

        if (firstUnchecked.selected) {
          parent.selected = true;
          parent.expanded = true;
          parent.checked = true;

          this.prepareMenu(parent);
        } else {
          this.prepareMenu(firstUnchecked);
        }
      } else if (parent.parent) {
        parent.parent.selected = true;
        parent.parent.expanded = true;
      }
    } else if (parent.parent) {
      this.prepareMenu(parent.parent);
    }
  }

  private resetMenu(parent: any) {
    parent.selected = false;

    if (parent.children && parent.children.size > 0) {
      const firstSelected = parent.children.filter((c: any) => c.selected).first();

      if (firstSelected) {
        firstSelected.selected = false;

        this.resetMenu(firstSelected);
      }
    } else if (parent.parent) {
      this.resetMenu(parent.parent);
    }
  }

  addMenuItem(item: NgaMenuItem, tag?: string) {
    this.addItemsChanges$.next({
      tag,
      item,
    });
  }

  selectMenuItem(item: NgaMenuItem) {
    item.selected = true;

    if (item.parent) {
      item.parent.expanded = true;

      this.selectMenuItem(item.parent);
    }
  }

  itemClick(item: NgaMenuItem, tag?: string) {
    this.itemClickChanges$.next({
      tag,
      item,
    });
  }

}
