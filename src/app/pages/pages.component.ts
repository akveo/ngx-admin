import { Component } from '@angular/core';

import { MENU_ITEMS_AR, MENU_ITEMS_EN } from './pages-menu';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  menu: NbMenuItem[];

  constructor(private translateService: TranslateService) {
    this.getTranslation();
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getTranslation();
    });
  }

  getTranslation() {
    this.translateService.currentLang === 'ar-EG' ? this.menu = MENU_ITEMS_AR : this.menu = MENU_ITEMS_EN;
  }
}
