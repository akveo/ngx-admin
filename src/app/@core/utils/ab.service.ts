import { Injectable } from '@angular/core';

import { fromEvent as observableFromEvent } from 'rxjs/observable/fromEvent';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators/filter';

@Injectable()
export class AbService {

  static readonly VARIANT_THEME_DEFAULT = 'theme-change-default';
  static readonly VARIANT_THEME_COSMIC = 'theme-change-cosmic';
  static readonly VARIANT_THEME_DARK = 'theme-change-dark';
  static readonly VARIANT_THEME_CORPORATE = 'theme-change-corporate';
  static readonly VARIANT_HIGHLIGHT_HIRE = 'highlight-hire';
  static readonly VARIANT_DEVELOPERS_HIRE = 'developers-hire';
  static readonly VARIANT_SOLUTION_HIRE = 'solution-hire';
  static readonly VARIANT_HIDE_CALL_ACTION = 'call-action-hide';
  // static readonly VARIANT_BANNER_HIRE = 'banner-hire';

  private static readonly EVENT_NAME = 'ab-variant';
  private static readonly AB_ENABLED = true;

  private events$ = new BehaviorSubject<{ name: string }>(null);

  constructor() {

    if (AbService.AB_ENABLED) {
      observableFromEvent<any>(document, AbService.EVENT_NAME)
        .subscribe((e: { detail: any }) => {
          if (e && e.detail) {
            this.events$.next(e.detail);
          }
        });
    }
  }

  onAbEvent(name: string = ''): Observable<{ name: string }> {
    return this.events$.asObservable()
      .pipe(
        filter(e => !!(e && e.name)),
        filter(e => name ? e.name === name : true),
      );
  }
}
