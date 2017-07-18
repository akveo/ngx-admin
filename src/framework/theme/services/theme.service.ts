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
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

import { ngaThemeOptionsToken } from '../theme.options';
import { NgaThemeConfig } from './themeConfig.service';
import { NgaThemeBreakpointsService } from './breakpoints.service';

@Injectable()
export class NgaThemeService {

  // TODO: behavioral subject here?
  currentTheme: string;
  private themeChanges$ = new ReplaySubject(1);
  private appendToLayoutTop$ = new ReplaySubject(1);
  private createLayoutTop$ = new Subject();
  private appendLayoutClass$ = new Subject();
  private removeLayoutClass$ = new Subject();
  private changeWindowWidth$ = new Subject<number>();

  constructor(@Inject(ngaThemeOptionsToken) protected options: any,
              private breakpointService: NgaThemeBreakpointsService,
              private themeConfig: NgaThemeConfig) {
    if (options && options.name) {
      this.changeTheme(options.name);
    }
  }

  changeTheme(name?: string): void {
    this.themeChanges$.next({ name, previous: this.currentTheme });
    this.currentTheme = name;
  }

  changeWindowWidth(width: number): void {
    this.changeWindowWidth$.next(width);
  }

  appendToLayoutTop<T>(component: Type<T>): Observable<any> {
    const observable = new BehaviorSubject(null);
    this.appendToLayoutTop$.next({ component, listener: observable });

    return observable.asObservable();
  }

  getConfig(): Observable<any> {
    return this.onThemeChange().map((theme: any) => {
      return this.themeConfig.get(theme.name);
    });
  }

  clearLayoutTop(): Observable<any> {
    const observable = new BehaviorSubject(null);
    this.createLayoutTop$.next({ listener: observable });

    return observable.asObservable();
  }

  onMediaQueryChange(): Observable<any> {
    return this.changeWindowWidth$
      .pairwise()
      .map(([prevWidth, width]: [number, number]) => {
        return [
          this.breakpointService.getBreakpoint(prevWidth),
          this.breakpointService.getBreakpoint(width),
        ]
      })
      .filter(([prevPoint, point]: [{ name: string, width: number }, { name: string, width: number }]) => {
        return prevPoint.name !== point.name;
      })
      .distinctUntilChanged(null, params => params[0].name + params[1].name);
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

  appendLayoutClass(className: string) {
    this.appendLayoutClass$.next(className);
  }

  onAppendLayoutClass(): Observable<any> {
    return this.appendLayoutClass$.publish().refCount();
  }

  removeLayoutClass(className: string) {
    this.removeLayoutClass$.next(className);
  }

  onRemoveLayoutClass(): Observable<any> {
    return this.removeLayoutClass$.publish().refCount();
  }
}
