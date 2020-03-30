import {Component, OnDestroy} from '@angular/core';
import {NbMediaBreakpoint, NbThemeService} from '@nebular/theme';
import {Router} from '@angular/router';
import {AnalyticsService} from '../@core/utils';
import {CurrentThemeService} from '../@core/utils/theme.service';

@Component({
  selector: 'ngx-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
})
export class NgxStarterComponent implements OnDestroy {
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;

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
              private themeService: NbThemeService,
              private currentThemeService: CurrentThemeService,
              private analytics: AnalyticsService,
              ) {}

  navigate(themeName: string) {
    this.currentThemeService.setCurrentTheme(themeName);
    this.themeService.changeTheme(themeName);
    this.router.navigate(['/pages/dashboard'], {queryParams: {theme: themeName}});
  }

  trackEmailClick() {
    this.analytics.trackEvent('clickContactEmail', 'click');
  }

  ngOnDestroy() {
  }
}
