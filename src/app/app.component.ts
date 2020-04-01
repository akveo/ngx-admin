/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { withLatestFrom, filter } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';

import { AnalyticsService } from './@core/utils/analytics.service';
import { AbService } from './@core/utils/ab.service';
import { SeoService } from './@core/utils/seo.service';
import { CurrentThemeService } from './@core/utils/theme.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  themes = ['default', 'cosmic', 'corporate', 'dark', 'material-dark', 'material-light'];

  constructor(private analytics: AnalyticsService,
              private seoService: SeoService,
              private activatedRoute: ActivatedRoute,
              private abService: AbService,
              private themeService: NbThemeService,
              private currentThemeService: CurrentThemeService) {

    this.themeService.onThemeChange()
      .subscribe((theme: any) => {
        this.analytics.trackEvent('changeTheme', theme.name);
      });

    this.activatedRoute.queryParams
      .subscribe((params: any) => {
        if (params.theme && this.themes.includes(params.theme)) {
          this.themeService.changeTheme(params.theme);
          this.currentThemeService.setCurrentTheme(params.theme);
        } else {
          this.themeService.changeTheme(this.currentThemeService.getCurrentTheme());
        }
      });
  }

  ngOnInit(): void {

    const variants = [
      AbService.VARIANT_THEME_CORPORATE,
      AbService.VARIANT_THEME_DEFAULT,
      AbService.VARIANT_THEME_COSMIC,
      AbService.VARIANT_THEME_DARK,
    ];

    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.abService.onAbEvent()
      .pipe(
        withLatestFrom(this.activatedRoute.queryParams),
        filter(([e, params]: [{ name: string }, any]) => !params.theme),
      )
      .subscribe(([e, params]: [{ name: string }, any]) => {
        const themeName = e.name.replace('theme-change-', '');
        if (variants.includes(e.name) && this.themes.includes(themeName)) {
          this.themeService.changeTheme(themeName);
        }
      });
  }
}
