/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import 'rxjs/add/operator/share';

@Injectable()
export class NgaSuperSearchService {
  private searchTerms = new Subject();


  constructor() {
  }

  search(term) {
    this.searchTerms.next(term);
  }

  onSearch(): Observable<any> {
    return this.searchTerms.share();
  }
}
