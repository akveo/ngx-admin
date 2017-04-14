/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { NgaMenuItem, NgaMenuModuleConfig } from './menu.options';

@Injectable()
export class NgaMenuService {

  private menuItemsChanges$ = new Subject();
  private itemClickChanges$ = new Subject();

  menuItemsChanges: Observable<{ tag: string, items: List<NgaMenuItem> }> = this.menuItemsChanges$.asObservable();

  itemClickChanges: Observable<{ tag: string, item: NgaMenuItem }> = this.itemClickChanges$.asObservable();

  private stack = List<NgaMenuItem>();
  private items = List<NgaMenuItem>();

  constructor(private router: Router, @Optional() private config: NgaMenuModuleConfig) {
    this.items = List(this.config.items);
  }

  prepareItems(tag?: string) {
    this.items.forEach(i => this.setParent(i));
    this.items.forEach(i => this.prepareItem(i));

    this.stack = this.stack.clear();

    this.menuItemsChanges$.next({ tag, items: this.items });
  }

  resetMenuItems(tag?: string) {
    this.items.forEach(i => this.resetItem(i));

    this.stack = this.stack.clear();

    this.menuItemsChanges$.next({
      tag,
      items: this.items,
    });
  }

  addMenuItems(tag?: string, ...newItems: NgaMenuItem[]) {
    this.items = this.items.push(...newItems);

    this.prepareItems(tag);
  }

  itemClick(item: NgaMenuItem, tag?: string) {
    this.itemClickChanges$.next({
      tag,
      item,
    });
  }

  private setParent(parent: NgaMenuItem) {
    if (parent.children && parent.children.size > 0) {
      const firstItemWithoutParent = parent.children.filter(c => c.parent === null || c.parent === undefined).first();

      if (firstItemWithoutParent) {
        firstItemWithoutParent.parent = parent;

        this.setParent(firstItemWithoutParent);
      }
    }

    if (parent.parent) {
      this.setParent(parent.parent);
    }
  }

  private prepareItem(parent: NgaMenuItem) {
    this.stack = this.stack.push(parent);

    if (parent.expanded) {
      if (parent.parent) {
        parent.parent.expanded = true;
      }
    }

    if (this.router.isActive(this.router.createUrlTree([parent.link]), parent.pathMath === 'full')) {
      parent.selected = true;

      if (parent.parent) {
        parent.parent.expanded = true;
      }
    }

    if (parent.children && parent.children.size > 0) {
      const firstUnchecked = parent.children.filter(c => !this.stack.contains(c)).first();

      if (firstUnchecked) {
        this.prepareItem(firstUnchecked);
      }
    }

    if (parent.parent) {
      this.prepareItem(parent.parent);
    }
  }

  private resetItem(parent: NgaMenuItem) {
    parent.selected = false;

    this.stack = this.stack.push(parent);

    if (parent.children && parent.children.size > 0) {
      const firstSelected = parent.children.filter(c => !this.stack.contains(c)).first();

      if (firstSelected) {
        firstSelected.selected = false;

        this.resetItem(firstSelected);
      }
    }

    if (parent.parent) {
      this.resetItem(parent.parent);
    }
  }

}
