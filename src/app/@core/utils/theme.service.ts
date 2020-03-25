import {Injectable, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {takeWhile} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class CurrentThemeService implements OnDestroy {
  alive = true;

  readonly currentTheme$: Observable<any> = new Observable(subscriber => {
    subscriber.next(localStorage.theme);
  }).pipe(takeWhile(() => this.alive));

  setCurrentTheme(themeName: string): void {
    const currentTheme = {
      themeName: themeName,
      expires_in: this.calculateExpiration(environment.currentThemeLife),
    };

    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }

  calculateExpiration(iat: number): number {
    const currentDate = new Date().getTime();
    const timestamp = iat || Math.floor(Date.now() / 1000);

    return Math.floor(timestamp + currentDate);
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
