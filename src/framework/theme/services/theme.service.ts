/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Inject, Injectable, Type } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/publish';

import { ngaThemeOptionsToken } from '../theme.options';

@Injectable()
export class NgaThemeService {

  // TODO: behavioral subject here?
  currentTheme: string;
  private themeChanges$ = new ReplaySubject(1);
  private appendToLayoutTop$ = new ReplaySubject(1);
  private createLayoutTop$ = new Subject();
  private activateSearch$ = new Subject();

  constructor(@Inject(ngaThemeOptionsToken) protected options: any) {
    if (options && options.name) {
      this.changeTheme(options.name);
    }
  }

  changeTheme(name?: string): void {
    this.themeChanges$.next({ name: name, previous: this.currentTheme });
    this.currentTheme = name;
  }

  appendToLayoutTop<T>(component: Type<T>): Observable<any> {
    const observable = new BehaviorSubject(null);
    this.appendToLayoutTop$.next({ component: component, listener: observable });
    return observable.asObservable();
  }

  clearLayoutTop(): Observable<any> {
    const observable = new BehaviorSubject(null);
    this.createLayoutTop$.next({ listener: observable });
    return observable.asObservable();
  }

  activateSearch(searchType: string, searchStatus: boolean) {
    this.activateSearch$.next({ type: searchType, status: searchStatus });
  }

  onSearchActivate(): Observable<any> {
    return this.activateSearch$.publish().refCount();
  }

  onThemeChange(): Observable<any> {
    return this.themeChanges$.publish().refCount();
  }

  onAppendToTop(): Observable<any> {
    return this.appendToLayoutTop$.publish().refCount();
  }

  onClearLayoutTop(): Observable<any> {
    return this.createLayoutTop$.publish().refCount();
  }
}
