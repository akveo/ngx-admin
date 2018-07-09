/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { TranslateService } from '@ngx-translate/core';
import { NbLayoutDirectionService } from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private analytics: AnalyticsService,
    private directionService: NbLayoutDirectionService) {
      this.initTranslate();
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }


  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    // const browserLang = this.translate.getBrowserLang();
    const direction = this.directionService.getDirection();
    if (direction.toString() === 'ar' ) {
      this.translate.use('ar');
    } else {
      this.translate.use('en');
    }

    // if (browserLang) {
    //   if (browserLang === 'zh') {
    //     const browserCultureLang = this.translate.getBrowserCultureLang();

    //     if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
    //       this.translate.use('zh-cmn-Hans');
    //     } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
    //       this.translate.use('zh-cmn-Hant');
    //     }
    //   } else {
    //     this.translate.use(this.translate.getBrowserLang());
    //   }
    // } else {
    //   this.translate.use('en'); // Set your language here
    // }
  }

}
