import { Injectable } from '@angular/core';
import { Subject, Observable, ReplaySubject } from "rxjs";
import 'rxjs/add/operator/share';

@Injectable()
export class NgaSuperSearchService {
  private searchActivations = new Subject();
  private searchTerms = new Subject();


  constructor() {
  }

  searchActivate(searchType: string, searchStatus: boolean) {
    this.searchActivations.next({ type: searchType, status: searchStatus });
  }

  search(term) {
    this.searchTerms.next(term);
  }

  onSearchActivate(): Observable<any> {
    return this.searchActivations.share();
  }

  onSearch(): Observable<any> {
    return this.searchTerms.share();
  }
}
