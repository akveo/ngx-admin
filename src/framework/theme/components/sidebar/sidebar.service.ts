/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publish';

@Injectable()
export class NgaSidebarService {

  private toggle$ = new Subject();
  private expand$ = new Subject();
  private collapse$ = new Subject();

  onToggle(): Observable<{ compact: boolean, tag: string }> {
    return this.toggle$.publish().refCount();
  }

  onExpand(): Observable<{ tag: string }> {
    return this.expand$.publish().refCount();
  }

  onCollapse(): Observable<{ tag: string }> {
    return this.collapse$.publish().refCount();
  }

  toggle(compact: boolean = false, tag?: string) {
    this.toggle$.next({ compact, tag });
  }

  expand(tag?: string) {
    this.expand$.next({ tag });
  }

  collapse(tag?: string) {
    this.collapse$.next({ tag });
  }

}
