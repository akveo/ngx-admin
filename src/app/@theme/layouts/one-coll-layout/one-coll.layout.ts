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
      <nga-layout-header fixed>
        <a href="/#/pages/dashboard" class="logo">NgX <span>Admin</span></a>
      </nga-layout-header>

      <nga-sidebar left>
        <nga-sidebar-content>
          <ng-content select="nga-menu"></ng-content>
        </nga-sidebar-content>
      </nga-sidebar>
      
      <nga-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nga-layout-column>
      
      <nga-layout-footer>
      </nga-layout-footer>
    </nga-layout>
  `,
})
export class OneCollLayoutComponent {
}
