import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { NgaMenuItem, NgaMenuModuleConfig } from './menu.options';

@Injectable()
export class NgaMenuService {

  constructor(@Optional() private config: NgaMenuModuleConfig,
                          private router: Router) {
  }

  getMenuItems(): Observable<any> {
    return Observable.create((observer: any) => {
      observer.next(this.config.menuItems);
    });
  }

  getCurrentMenuItem(): Observable<any> {
    return Observable.create((observer: any) => {
      observer.next();
    });
  }

  addMenuItem(menuItem: NgaMenuItem) { }

}
