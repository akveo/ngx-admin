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
  private itemClick$ = new Subject();
  private addItems$ = new Subject();
  private navigateHome$ = new Subject();

  itemsChangesSuggest: Observable<{ tag: string, items: List<NgaMenuItem> }> = this.itemsChanges$.asObservable();
  itemClickSuggest: Observable<{ tag: string, item: NgaMenuItem }> = this.itemClick$.asObservable();
  addItemsSuggest: Observable<{ tag: string, items: List<NgaMenuItem> }> = this.addItems$.asObservable();
  navigateHomeSuggest: Observable<{ tag: string }> = this.navigateHome$.asObservable();

  private stack = List<NgaMenuItem>();
  private items = List<NgaMenuItem>();

  constructor(private router: Router, @Optional() private config: NgaMenuModuleConfig) {
    this.items = List(this.config.items);
  }

  getItems(): List<NgaMenuItem> {
    return List(this.items);
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

  navigateHome(tag?: string) {
    this.navigateHome$.next({ tag });
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
      const firstUnchecked = parent.children.filter((c: any) => !this.stack.contains(c)).first();

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
      const firstSelected = parent.children.filter((c: any) => !this.stack.contains(c)).first();

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
