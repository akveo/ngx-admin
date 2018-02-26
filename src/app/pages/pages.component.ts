import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <div>
      <label>
        {{ 'HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang"
          >{{ lang }}</option>
        </select>
      </label>
    </div>
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
  constructor(private translate: TranslateService) {// private translate: TranslateService) {
    this.translate = translate;
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    // let
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/es|en/) ? browserLang : 'es');
  }
}
