import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { TranslateService } from '@ngx-translate/core';

const MENU_ITEMS_TRANSLATED: Array<string> = [
  "Dashboard",
  "UI Features",
  "Buttons",
  "Grid",
  "Icons",
  "Modals",
  "Popovers",
  "Typography",
  "Animated Searches",
  "Tabs",
  "Forms",
  "Form Inputs",
  "Form Layouts",
  "Components",
  "Notifications",
  "Maps",
  "Google Maps",
  "Leaflet Maps",
  "Bubble Maps",
  "Search Maps",
  "Charts",
  "Echarts",
  "Charts.js",
  "D3",
  "Editors",
  "TinyMCE",
  "CKEditor",
  "Tables",
  "Miscellaneous",
  "Auth",
  "Register",
  "Request Password",
  "Reset Password",
];


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

  menu = MENU_ITEMS;

  // TODO: Loop through Menu and translate each one
  constructor(private translate: TranslateService) {
    // console.log("Menu array >>", MENU_ITEMS);
    // this.getTranslation();
  }


  //getTranslation() {
    //this.translate.get(MENU_ITEMS_TRANSLATED).subscribe(value => {
      // this.logoutConfirm.title = value.LOGOUT_CONFIRM_TITLE;
      // this.logoutConfirm.msg = value.LOGOUT_CONFIRM_MSG;
      // this.logoutConfirm.ok = value.LOGOUT_CONFIRM_OK;
      // this.logoutConfirm.no = value.LOGOUT_CONFIRM_NO;
   // });
  //}


}
