import { Component } from '@angular/core';

import 'style-loader!../@theme/styles/gorgeous/gorgeous.theme.scss';
import 'style-loader!../@theme/styles/pure/pure.theme.scss';

@Component({
  selector: 'pages',
  template: `
    <one-column-layout>
      <nga-menu></nga-menu>
      <router-outlet></router-outlet>
    </one-column-layout>
  `,
})
export class PagesComponent {
}
