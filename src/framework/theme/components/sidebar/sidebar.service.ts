/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publish';

/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 */
@Injectable()
export class NgaSidebarService {

  private toggle$ = new Subject();
  private expand$ = new Subject();
  private collapse$ = new Subject();

  /**
   * Subscribe to toggle events
   *
   * @returns {Observable<{ compact: boolean, tag: string }>}
   */
  onToggle(): Observable<{ compact: boolean, tag: string }> {
    return this.toggle$.publish().refCount();
  }

  /**
   * Subscribe to expand events
   * @returns {Observable<{ tag: string }>}
   */
  onExpand(): Observable<{ tag: string }> {
    return this.expand$.publish().refCount();
  }

  /**
   * Subscribe to collapse evens
   * @returns {Observable<{ tag: string }>}
   */
  onCollapse(): Observable<{ tag: string }> {
    return this.collapse$.publish().refCount();
  }

  /**
   * Toggle a sidebar
   * @param {boolean} compact
   * @param {tag} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
   * to specify which sidebar you want to control
   */
  toggle(compact: boolean = false, tag?: string) {
    this.toggle$.next({ compact, tag });
  }

  /**
   * Expands a sidebar
   * @param {tag} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
   * to specify which sidebar you want to control
   */
  expand(tag?: string) {
    this.expand$.next({ tag });
  }

  /**
   * Collapses a sidebar
   * @param {tag} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
   * to specify which sidebar you want to control
   */
  collapse(tag?: string) {
    this.collapse$.next({ tag });
  }

}
