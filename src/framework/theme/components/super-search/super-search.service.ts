import { Injectable } from '@angular/core';
import {Subject, Observable, ReplaySubject} from "rxjs";
import 'rxjs/add/operator/share';

@Injectable()
export class NgaSuperSearchService {
  private searchActivations = new Subject();
  private fieldCreation = new Subject();

  private searchType: string;
  private searchShow: boolean;

  constructor() {
  }

  searchActivate(searchType: string, searchStatus: boolean) {
    this.searchActivations.next({type: searchType, status: searchStatus});
    this.searchType = searchType;
    this.searchShow = searchStatus;
  }

  onSearchActivate(): Observable<any> {
    let observable = this.searchActivations.share();
    return observable;
  }


  createSearchField(component, data) {
    let observable = new ReplaySubject(1);
    this.fieldCreation.next({component, data, listener: observable});
    return observable.asObservable();
  }

  onSearchFieldCreation(): Observable<any> {
    return this.fieldCreation.share();
  }
}
