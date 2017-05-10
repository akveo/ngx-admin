/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { NgaThemeService } from '../../services/theme.service';

@Injectable()
export class NgaSuperSearchService {
  private searchTerms = new Subject();

  constructor(private themeService: NgaThemeService) {}

  activateSearch(searchType: string) {
    this.onSearchActivate(searchType);
  }

  onSearchActivate(searchType: string) {
    this.themeService.appendLayoutClass(searchType);
    setTimeout(() => this.themeService.appendLayoutClass('with-search'), 1);
  }

  deactivateSearch(searchType) {
    this.onSearchDeactivate(searchType);
  }

  onSearchDeactivate(searchType) {
    this.themeService.removeLayoutClass('with-search');
    setTimeout(() => this.themeService.removeLayoutClass(searchType), 500);
  }

  searchSubmit(term) {
    this.searchTerms.next(term);
  }

  onSearchSubmit(): Observable<any> {
    return this.searchTerms.share();
  }
}
