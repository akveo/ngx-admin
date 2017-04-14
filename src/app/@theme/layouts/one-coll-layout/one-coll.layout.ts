/*
* TODO
* I think we need to store our header, footer,
* sedibars and etc. separetly, each in it's own
* component.
*
* And of course we need to make this layout part
* reusable.
* */
import { Component } from '@angular/core';

@Component({
  selector: 'one-coll-layout',
  styleUrls: ['./one-coll.layout.scss'],
  template: `
    <nga-layout>
      <nga-layout-header fixed></nga-layout-header>
      <nga-sidebar fixed>
        <ng-content select="nga-menu"></ng-content>
      </nga-sidebar>
      <nga-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nga-layout-column>
      <nga-layout-footer></nga-layout-footer>
    </nga-layout>
  `,
})
export class RootLayoutComponent {
  constructor() { }
}
