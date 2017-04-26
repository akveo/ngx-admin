import { Component } from '@angular/core';

@Component({
  selector: 'pages',
  styleUrls: [
    '../@theme/styles/gorgeous/gorgeous.theme.scss',
    '../@theme/styles/pure/pure.theme.scss',
  ],
  template: `
    <one-coll-layout>
      <nga-menu></nga-menu>
      <router-outlet></router-outlet>
    </one-coll-layout>
  `,
})
export class PagesComponent {
}
