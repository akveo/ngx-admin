/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { List } from 'immutable';
import 'rxjs/add/operator/publish';

const itemClick$ = new ReplaySubject(1);
const addItems$ = new ReplaySubject(1);
const navigateHome$ = new ReplaySubject(1);
const getSelectedItem$ = new ReplaySubject(1);
const itemSelect$ = new ReplaySubject(1);
const itemHover$ = new ReplaySubject(1);
const submenuToggle$ = new ReplaySubject(1);

export abstract class NgaMenuItem {
  title: string;
  link?: string;
  url?: string;
  icon?: string;
  expanded?: boolean;
  children?: List<NgaMenuItem>;
  target?: string;
  hidden?: boolean;
  pathMath?: string = 'full'; // TODO: is not set if item is initialized by default, should be set anyway
  home?: boolean;
  group?: boolean;
  parent?: NgaMenuItem;
  selected?: boolean;
  data?: any;
}

export interface NgaMenuOptions {
  items?: List<NgaMenuItem>;
}

export const ngaMenuOptionsToken = new InjectionToken<NgaMenuOptions>('NGA_MENU_OPTIONS');

// TODO: map select events to router change events
@Injectable()
export class NgaMenuService {
  addItems(items: List<NgaMenuItem>, tag?: string) {
    addItems$.next({ tag, items });
  }

  navigateHome(tag?: string) {
    navigateHome$.next({ tag });
  }

  getSelectedItem(tag?: string): Observable<{ tag: string; item: NgaMenuItem }> {
    const listener = new BehaviorSubject<{ tag: string; item: NgaMenuItem }>(null);

    getSelectedItem$.next({ tag, listener });

    return listener.asObservable();
  }

  onItemClick(): Observable<{ tag: string; item: NgaMenuItem }> {
    return itemClick$.publish().refCount();
  }

  onItemSelect(): Observable<{ tag: string; item: NgaMenuItem }> {
    return itemSelect$.publish().refCount();
  }

  onItemHover(): Observable<{ tag: string; item: NgaMenuItem }> {
    return itemHover$.publish().refCount();
  }

  onSubmenuToggle(): Observable<{ tag: string; item: NgaMenuItem }> {
    return submenuToggle$.publish().refCount();
  }
}

@Injectable()
export class NgaMenuInternalService {
  private stack = List<NgaMenuItem>();

  private items = List<NgaMenuItem>();

  constructor(private router: Router, private location: Location, @Inject(ngaMenuOptionsToken) private options: any) {
    if (options && options.items) {
      this.items = List<NgaMenuItem>(this.options.items);
    } else {
      this.items = List<NgaMenuItem>();
    }
  }

  getItems(): List<NgaMenuItem> {
    return List<NgaMenuItem>(this.items);
  }

  prepareItems(items: List<NgaMenuItem>) {
    items.forEach(i => this.setParent(i));
    items.forEach(i => this.prepareItem(i));

    this.clearStack();
  }

  onAddItem(): Observable<{ tag: string; items: List<NgaMenuItem> }> {
    return addItems$.publish().refCount();
  }

  onNavigateHome(): Observable<{ tag: string }> {
    return navigateHome$.publish().refCount();
  }

  onGetSelectedItem(): Observable<{ tag: string; listener: BehaviorSubject<{ tag: string; item: NgaMenuItem }> }> {
    return getSelectedItem$.publish().refCount();
  }

  itemHover(item: NgaMenuItem, tag?: string) {
    itemHover$.next({
      tag,
      item,
    });
  }

  submenuToggle(item: NgaMenuItem, tag?: string) {
    submenuToggle$.next({
      tag,
      item,
    });
  }

  resetItems(items: List<NgaMenuItem>) {
    items.forEach(i => this.resetItem(i));

    this.clearStack();
  }

  itemSelect(item: NgaMenuItem, tag?: string) {
    itemSelect$.next({
      tag,
      item,
    });
  }

  itemClick(item: NgaMenuItem, tag?: string) {
    itemClick$.next({
      tag,
      item,
    });
  }

  collapseAll(items: List<NgaMenuItem>, except?: NgaMenuItem) {
    items.forEach(i => this.collapseItem(i, except));

    this.clearStack();
  }

  private resetItem(parent: NgaMenuItem) {
    parent.selected = false;

    this.stack = this.stack.push(parent);

    if (parent.children && parent.children.size > 0) {
      const firstSelected = parent.children.filter((c: NgaMenuItem) => !this.stack.contains(c)).first();

      if (firstSelected) {
        firstSelected.selected = false;

        this.resetItem(firstSelected);
      }
    }

    if (parent.parent) {
      this.resetItem(parent.parent);
    }
  }

  private collapseItem(parent: NgaMenuItem, except?: NgaMenuItem) {
    if (parent === except) {
      return;
    }

    parent.expanded = false;

    this.stack = this.stack.push(parent);

    if (parent.children && parent.children.size > 0) {
      const firstSelected = parent.children.filter((c: NgaMenuItem) => !this.stack.contains(c)).first();

      if (firstSelected) {
        firstSelected.expanded = false;

        this.collapseItem(firstSelected);
      }
    }

    if (parent.parent) {
      this.collapseItem(parent.parent);
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

  private prepareItem(parent: NgaMenuItem) {
    parent.selected = false;

    this.stack = this.stack.push(parent);

    if (parent.expanded) {
      if (parent.parent) {
        parent.parent.expanded = true;
      }
    }

    const exact: boolean = parent.pathMath === 'full';

    if ((exact && this.location.path() === parent.link) || (!exact && this.location.path().includes(parent.link))) {
      parent.selected = true;

      if (parent.parent) {
        parent.parent.expanded = true;
      }
    }

    if (parent.children && parent.children.size > 0) {
      const firstUnchecked = parent.children.filter((c: NgaMenuItem) => !this.stack.contains(c)).first();

      if (firstUnchecked) {
        this.prepareItem(firstUnchecked);
      }
    }

    if (parent.parent) {
      this.prepareItem(parent.parent);
    }
  }

  private clearStack() {
    this.stack = this.stack.clear();
  }
}
