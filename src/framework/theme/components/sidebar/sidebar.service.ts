import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NgaSidebarService {

  private toggleChanges$ = new Subject();
  private expandChanges$ = new Subject();
  private collapseChanges$ = new Subject();

  toggleChanges: Observable<any> = this.toggleChanges$.asObservable();
  expandChanges: Observable<any> = this.expandChanges$.asObservable();
  collapseChanges: Observable<any> = this.collapseChanges$.asObservable();

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
