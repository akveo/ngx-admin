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

  private itemsChanges$ = new Subject();
  private itemClickChanges$ = new Subject();

  itemsChanges: Observable<{ tag: string, items: List<NgaMenuItem> }> = this.itemsChanges$.asObservable();

  itemClickChanges: Observable<{ tag: string, item: NgaMenuItem }> = this.itemClickChanges$.asObservable();

  private stack = List<NgaMenuItem>();
  private items = List<NgaMenuItem>();

  constructor(private router: Router, @Optional() private config: NgaMenuModuleConfig) {
    this.items = List(this.config.items);
  }

  prepareItems(tag?: string) {
    this.items.forEach(i => this.setParent(i));
    this.items.forEach(i => this.prepareItem(i));

    this.clearStack();

    this.itemsChanges$.next({ tag, items: this.items });
  }

  resetMenuItems(tag?: string) {
    this.items.forEach(i => this.resetItem(i));

    this.clearStack();

    this.itemsChanges$.next({
      tag,
      items: this.items,
    });
  }

  addMenuItems(newItems: List<NgaMenuItem>, tag?: string) {
    this.items = this.items.push(...newItems.toJS());

    this.prepareItems(tag);
  }

  itemClick(item: NgaMenuItem, tag?: string) {
    this.itemClickChanges$.next({
      tag,
      item,
    });
  }

  navigateHome() {
    let homeItem: any;

    this.items.forEach(i => {
      const result = this.getHomeItem(i);

      if (result) {
        homeItem = result;
      }
    });

    this.clearStack();

    if (homeItem) {
      this.resetMenuItems();

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

  private prepareItem(parent: any) {
    parent.selected = false;

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

  private resetItem(parent: any) {
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

  private clearStack() {
    this.stack = this.stack.clear();
  }

}
