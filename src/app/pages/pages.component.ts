import { Component } from '@angular/core';

import 'style-loader!../@theme/styles/cosmic/cosmic.theme.scss';
import 'style-loader!../@theme/styles/light/light.theme.scss';
import 'style-loader!../@theme/styles/default/default.theme.scss';

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
