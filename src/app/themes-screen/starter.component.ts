import { Component, OnInit } from '@angular/core';
import { NbMediaBreakpoint } from '@nebular/theme';
import { Router } from '@angular/router';
import { AnalyticsService } from '../@core/utils';
import { CurrentThemeService } from '../@core/utils/theme.service';
import { Observable } from 'rxjs';
import { MetadataService } from '../@core/utils/metadata.service';

@Component({
  selector: 'ngx-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
})
export class NgxStarterComponent implements OnInit {
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;

  public readonly materialTheme$ = new Observable(subscriber => {
    const themeName: string = this.currentThemeService.getCurrentTheme();

    subscriber.next(themeName.startsWith('material'));
  });

  themes = [
    {
      value: 'material-light',
      name: 'Material Light',
    },
    {
      value: 'material-dark',
      name: 'Material Dark',
    },
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
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
              private currentThemeService: CurrentThemeService,
              private analytics: AnalyticsService,
              private metadataService: MetadataService,
              ) {}

  // tslint:disable:max-line-length
  ngOnInit(): void {
    this.metadataService.updateTitle('Ngx-admin themes for e-commerce dashboard on Angular 15+ and Nebular');
    this.metadataService.updateDescription('Choose a theme for ngx-admin e-commerce dashboard: Material, Light and Dark, Cosmic and Corporate.');
    this.metadataService.updateKeywords('Ngx-admin themes, material theme, ngx-admin cosmic, ngx-admin corporate theme, dark theme ngx-admin');
  }
  // tslint:enable:max-line-length

  navigate(themeName: string) {
    this.currentThemeService.setCurrentTheme(themeName);
    this.router.navigate(['/pages/dashboard'], {queryParams: {theme: themeName}});
  }

  trackEmailClick() {
    this.analytics.trackEvent('clickContactEmail', 'click');
  }
}
