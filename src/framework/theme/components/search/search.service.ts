/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class NgaSuperSearchService {
  private searchSubmittings$ = new Subject();
  private searchActivations$ = new Subject();
  private searchDeactivations$ = new Subject();

  activateSearch(searchType: string, tag?: string) {
    this.searchActivations$.next({ searchType, tag });
  }

  deactivateSearch(searchType: string, tag?: string) {
    this.searchDeactivations$.next({ searchType, tag });
  }

  submitSearch(term: string, tag?: string) {
    this.searchSubmittings$.next({ term, tag });
  }

  onSearchActivate(): Observable<{ searchType: string, tag?: string }> {
    return this.searchActivations$.share();
  }

  onSearchDeactivate(): Observable<{ searchType: string, tag?: string }> {
    return this.searchDeactivations$.share();
  }

  onSearchSubmit(): Observable<{ term: string, tag?: string }> {
    return this.searchSubmittings$.share();
  }
}
