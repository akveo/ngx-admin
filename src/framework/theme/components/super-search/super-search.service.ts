import { Injectable } from '@angular/core';
import {Subject, Observable} from "rxjs";
import 'rxjs/add/operator/share';

@Injectable()
export class NgaSuperSearchService {
  private searchActivations = new Subject();

  constructor() { }

  searchActivate(searchType: string, searchStatus: boolean) {
    console.group(`search consume`);
    console.log(searchType);
    console.log(searchStatus);
    console.groupEnd();
    this.searchActivations.next({type: searchType, status: searchStatus});
  }

  onSearchActivate(): Observable<any> {
    let observable = this.searchActivations.share();
    console.group(`observable`);
    console.log(observable);
    console.groupEnd();
    return observable;
  }
}
