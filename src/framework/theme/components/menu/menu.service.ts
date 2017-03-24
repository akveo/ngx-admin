import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { Subject, Observable } from 'rxjs';

import { NgaMenuItem, NgaMenuModuleConfig } from './menu.interfaces';

@Injectable()
export class NgaMenuService {

  private menuItems: Array<NgaMenuItem>;

  constructor(@Optional() config: NgaMenuModuleConfig,
              private router: Router) {
    this.menuItems = config.menuItems;
  }

  getMenuItems(): Observable<any> {
    return Observable.create((observer: any) => {
      observer.next(this.menuItems);
    });
  }

  getCurrentMenuItem(): Observable<any> {
    return Observable.create((observer: any) => {
      observer.next();
    });
  }

  addMenuItem(menuItem: NgaMenuItem) { }

}
