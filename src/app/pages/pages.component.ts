import { Component } from '@angular/core';

@Component({
  selector: 'pages',
  styleUrls: [
    '../@theme/styles/gorgeous/gorgeous.theme.scss',
    '../@theme/styles/pure/pure.theme.scss',
  ],
  template: `
    <one-column-layout>
      <nga-menu></nga-menu>
      <router-outlet></router-outlet>
    </one-column-layout>
  `,
})
export class PagesComponent {
}
