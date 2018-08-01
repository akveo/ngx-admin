/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { I18nService } from './@core/data/i18n.service';
import { environment } from '../environments/environment';



@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    private i18nService: I18nService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
  }



}
