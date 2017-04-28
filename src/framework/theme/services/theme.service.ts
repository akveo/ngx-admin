/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/publish';

import { ngaThemeOptionsToken } from '../theme.options';

@Injectable()
export class NgaThemeService {

  currentTheme: string;
  private themeChanges$ = new ReplaySubject(1);
  private appendToTop$ = new Subject();

  constructor(@Inject(ngaThemeOptionsToken) protected options: any) {
    if (options && options.name) {
      this.changeTheme(options.name);
    }
  }

  changeTheme(name?: string): void {
    this.themeChanges$.next({ name: name, previous: this.currentTheme });
    this.currentTheme = name;
  }

  appendToTop(component: any): void {
    this.appendToTop$.next(component);
  }

  onThemeChange(): Observable<any> {
    return this.themeChanges$.publish().refCount();
  }

  onAppendToTop(): Observable<any> {
    return this.appendToTop$.publish().refCount();
  }

}
