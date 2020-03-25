import {Injectable, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {takeWhile} from 'rxjs/operators';

@Injectable()
export class CurrentThemeService implements OnDestroy {
  alive = true;

  readonly currentTheme$: Observable<any> = new Observable(subscriber => {
    subscriber.next(localStorage.theme);
  }).pipe(takeWhile(() => this.alive));

  ngOnDestroy(): void {
    this.alive = false;
  }
}
