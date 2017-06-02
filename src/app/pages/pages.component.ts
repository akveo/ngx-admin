import { Component } from '@angular/core';

import 'style-loader!../@theme/styles/cosmic/theme.scss';
import 'style-loader!../@theme/styles/light/theme.scss';
import 'style-loader!../@theme/styles/default/theme.scss';

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
