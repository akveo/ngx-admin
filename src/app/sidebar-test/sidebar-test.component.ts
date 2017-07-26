/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnInit } from '@angular/core';

import { NgaSidebarService } from '@akveo/nga-theme';

@Component({
  selector: 'nga-sidebar-test',
  styles: [
    `
    :host /deep/ nga-layout-column {
      background-color: #76ecff;
    }
    `,
  ],
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <a href="#" class="navbar-brand">Akveo</a>

        <button id="collapse-left" (click)="collapseLeft()">Collapse Left</button>
        <button id="collapse-right" (click)="collapseRight()">Collapse Right</button>
      </nga-layout-header>

      <nga-sidebar state="collapsed" fixed tag="left">
      </nga-sidebar>

      <nga-sidebar right state="compacted" tag="right">
        <nga-sidebar-header>Some Header</nga-sidebar-header>
        {{ content }}
      </nga-sidebar>

      <nga-layout-column left>
       {{ content }}
      </nga-layout-column>
      <nga-layout-column>
       {{ content }}
      </nga-layout-column>
      <nga-layout-column>
       {{ content }}
      </nga-layout-column>


      <nga-layout-footer fixed>
        &copy; Akveo 2017
      </nga-layout-footer>
    </nga-layout>
`,
})
export class NgaSidebarTestComponent implements OnInit {

  content = 'First ';

  constructor(private sidebarService: NgaSidebarService) { }

  collapseLeft() {
    this.sidebarService.toggle(false, 'left');
  }

  collapseRight() {
    this.sidebarService.toggle(true, 'right');
  }

  ngOnInit() {

    for (let i = 0; i < 1000; i++) {
      this.content += 'Akveo ';
    }
    this.content += ' Last';
  }
}
