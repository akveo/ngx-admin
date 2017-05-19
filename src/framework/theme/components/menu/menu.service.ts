/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable, Optional, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { List } from 'immutable';
import 'rxjs/add/operator/publish';

import { NgaMenuOptions, NgaMenuItem, ngaMenuOptionsToken } from './menu.options';

@Injectable()
export class NgaMenuService {

  private itemClick$ = new ReplaySubject(1);
  private addItems$ = new ReplaySubject(1);
  private navigateHome$ = new ReplaySubject(1);
  private getSelectedItem$ = new ReplaySubject(1);
  private itemSelect$ = new ReplaySubject(1);
  private itemHover$ = new ReplaySubject(1);

  private stack = List<NgaMenuItem>();
  private items = List<NgaMenuItem>();

  constructor(private router: Router,
              private location: Location,
              @Inject(ngaMenuOptionsToken) private options: any) {
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

  resetItems(items: List<NgaMenuItem>) {
    items.forEach(i => this.resetItem(i));

    this.clearStack();
  }

  addItems(items: List<NgaMenuItem>, tag?: string) {
    this.addItems$.next({ tag, items });
  }

  itemClick(item: NgaMenuItem, tag?: string) {
    this.itemClick$.next({
      tag,
      item,
    });
  }

  itemSelect(item: NgaMenuItem, tag?: string) {
    this.itemSelect$.next({
      tag,
      item,
    });
  }

  itemHover(item: NgaMenuItem, tag?: string) {
    this.itemHover$.next({
      tag,
      item,
    });
  }

  navigateHome(tag?: string) {
    this.navigateHome$.next({ tag });
  }

  getSelectedItem(tag?: string): Observable<{ tag: string, item: NgaMenuItem }> {
    const listener = new BehaviorSubject<{ tag: string, item: NgaMenuItem }>(null);

    this.getSelectedItem$.next({ tag, listener });

    return listener.asObservable();
  }

  onItemClick(): Observable<{ tag: string, item: NgaMenuItem }> {
    return this.itemClick$.publish().refCount();
  }

  onItemSelect(): Observable<{ tag: string, item: NgaMenuItem }> {
    return this.itemSelect$.publish().refCount();
  }

  onItemHover(): Observable<{ tag: string, item: NgaMenuItem }> {
    return this.itemHover$.publish().refCount();
  }

  onAddItem(): Observable<{ tag: string, items: List<NgaMenuItem> }> {
    return this.addItems$.publish().refCount();
  }

  onNavigateHome(): Observable<{ tag: string }> {
    return this.navigateHome$.publish().refCount();
  }

  onGetSelectedItem(): Observable<{ tag: string, listener: BehaviorSubject<{ tag: string, item: NgaMenuItem }> }> {
    return this.getSelectedItem$.publish().refCount();
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

  private clearStack() {
    this.stack = this.stack.clear();
  }

}
