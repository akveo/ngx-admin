/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private analytics: AnalyticsService) {
      this.initTranslate();
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }


  initTranslate() {
    // TODO: Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');


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
