/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NgaSidebarService {

  private toggleChanges$ = new Subject();
  private expandChanges$ = new Subject();
  private collapseChanges$ = new Subject();

  toggleChanges: Observable<{ compact: boolean, tag: string }> = this.toggleChanges$.asObservable();
  expandChanges: Observable<{ tag: string }> = this.expandChanges$.asObservable();
  collapseChanges: Observable<{ tag: string }> = this.collapseChanges$.asObservable();

  toggle(compact: boolean = false, tag?: string) {
    this.toggleChanges$.next({ compact, tag });
  }

  expand(tag?: string) {
    this.expandChanges$.next({ tag });
  }

  collapse(tag?: string) {
    this.collapseChanges$.next({ tag });
  }

}
