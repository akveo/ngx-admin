import { Component } from '@angular/core';

import 'style-loader!../@theme/styles/gorgeous/gorgeous.theme.scss';
import 'style-loader!../@theme/styles/pure/pure.theme.scss';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-one-column-layout>
      <nga-menu></nga-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
}
