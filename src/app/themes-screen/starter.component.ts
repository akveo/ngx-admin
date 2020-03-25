import {Component, enableProdMode, OnDestroy} from '@angular/core';
import {NbMediaBreakpoint, NbThemeService} from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {AnalyticsService} from '../@core/utils';
import { environment } from '../../environments/environment';

@Component({
  selector: 'ngx-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
})
export class NgxStarterComponent implements OnDestroy {
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;

  private alive = true;

  themes = [
    {
      value: 'material-light',
      name: 'Material Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'material-dark',
      name: 'Material Dark',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
  ];

  constructor(private router: Router,
              private route: ActivatedRoute,
              protected themeService: NbThemeService,
              private analytics: AnalyticsService,
              ) {}

  navigate(themeName: string) {
    const currentTheme = {
      themeName: themeName,
      expires_in: this.calculateExpiration(environment.currentThemeLife),
    };

    localStorage.setItem('theme', JSON.stringify(currentTheme));

    this.themeService.changeTheme(themeName);
    this.router.navigate(['/pages/dashboard'], {queryParams: {theme: themeName}});
  }

  trackEmailClick() {
    this.analytics.trackEvent('clickContactEmail', 'click');
  }

  ngOnDestroy() {
    this.alive = false;
  }

  calculateExpiration(iat: number): number {
    const currentDate = new Date().getTime();
    const timestamp = iat || Math.floor(Date.now() / 1000);

    return Math.floor(timestamp + currentDate);
  }
}
