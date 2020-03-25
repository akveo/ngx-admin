import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CurrentThemeService} from '../utils/theme.service';
import {NbDateService} from '@nebular/theme';

@Injectable()
export class ThemeGuard implements CanActivate {
  constructor(private router: Router,
              private currentThemeService: CurrentThemeService,
              private dateService: NbDateService<number>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.currentThemeService.currentTheme$.pipe(
        map(theme => {
          const currentThemeExpiration = JSON.parse(theme).expires_in;
          const currentDate = new Date().getTime();
          if (!theme || currentDate > currentThemeExpiration) {
            this.router.navigate(['themes']);
          }
          return true;
        }));
  }
}
