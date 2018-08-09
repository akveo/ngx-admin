import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class LayoutService {

  protected layoutSize$ = new Subject();

  changeLayoutSize() {
    this.layoutSize$.next();
  }

  onChangeLayoutSize(): Observable<any> {
    return this.layoutSize$.pipe(share());
  }
}
