import { Component } from '@angular/core';

import 'style-loader!../@theme/styles/themes.scss';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-one-column-layout>
      <nga-menu inverse></nga-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
}
