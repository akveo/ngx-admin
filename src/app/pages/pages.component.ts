import { Component } from '@angular/core';

@Component({
  selector: 'pages',
  template: `
    <one-coll-layout>
      <router-outlet></router-outlet>
    </one-coll-layout>
  `
})
export class PagesComponent {
}
