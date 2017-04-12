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

  private preparedMenuItems$ = new Subject();
  private addItemsChanges$ = new Subject();
  private itemClickChanges$ = new Subject();

  preparedMenuItems: Observable<{ tag: string, items: List<NgaMenuItem> }> = this.preparedMenuItems$.asObservable();

  addMenuChanges: Observable<{ tag: string, item: NgaMenuItem }> = this.addItemsChanges$.asObservable();

  itemClickChanges: Observable<{ tag: string, item: NgaMenuItem }> = this.itemClickChanges$.asObservable();

  constructor(private router: Router) { }

  prepareMenuItems(items: List<NgaMenuItem>, tag?: string) {
    items.forEach(i => this.prepareMenuItem(i));

    this.preparedMenuItems$.next({
      tag,
      items,
    });
  }

  private prepareMenuItem(item: NgaMenuItem) {
    if (item.children && item.children.size > 0) {
      const firstItemWithoutParent = item.children.filter(c => c.parent === null || c.parent === undefined).first();

      if (firstItemWithoutParent) {
        firstItemWithoutParent.parent = item;

        this.prepareMenuItem(firstItemWithoutParent);
      }
    } else if (item.parent) {
      this.prepareMenuItem(item.parent);
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

  resetMenuItems(prevSelectedItem: NgaMenuItem) {
    prevSelectedItem.selected = false;

    if (prevSelectedItem.parent) {
      prevSelectedItem.parent.expanded = false;

      this.resetMenuItems(prevSelectedItem.parent);
    }
  }

  itemClick(item: NgaMenuItem, tag?: string) {
    this.itemClickChanges$.next({
      tag,
      item,
    });
  }

}
