import { Component } from '@angular/core';

@Component({
  selector: 'pages',
  template: `
    <one-coll-layout>
      <nga-menu></nga-menu>
      <router-outlet></router-outlet>
    </one-coll-layout>
  `,
})
export class PagesComponent {
}
