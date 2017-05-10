/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'nga-user-test',
  styles: [
    `
      .test-row {
        margin: 20px;
      }
    `,
  ],
  template: `
    <nga-layout id="layout-fluid">
      <nga-layout-header fixed>
        <nga-user inverse showInitials size="medium" name="Dmitry Nehaychik" title="Worker"
                  [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
      </nga-layout-header>


      <nga-layout-column>
        <div class="test-row">
          <nga-user></nga-user>
        </div>
        <div class="test-row">
          <nga-user showInitials></nga-user>
        </div>
        <div class="test-row">
          <nga-user size="large" name="Dmitry Nehaychik"></nga-user>
        </div>
        <div class="test-row">
          <nga-user name="Dmitry Nehaychik" title="Worker"></nga-user>
        </div>
        <div class="test-row">
          <nga-user size="small" name="Dmitry Nehaychik" title="Worker" showTitle="false"></nga-user>
        </div>
        <div class="test-row">
          <nga-user onlyPicture size="medium" name="Dmitry Nehaychik" title="Worker"></nga-user>
        </div>
        <div class="test-row">
          <nga-user size="medium" name="Dmitry Nehaychik" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
        </div>
        <div class="test-row">
          <nga-user onlyPicture size="medium" name="Dmitry Nehaychik" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
        </div>
        <div class="test-row">
          <nga-user size="large" picture="http://lorempixel.com/400/200/animals/"
                    name="Dmitry Nehaychik" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
        </div>
        <div class="test-row">
          <nga-user showInitials size="medium" name="Dmitry Nehaychik" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nga-user>
        </div>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgaUserTestComponent {

  contextMenu = [
    { title: 'Profile', link: 'some/link' },
    { title: 'Billing', target: '_blank', url: 'http://akveo.com' },
    { title: 'Exit', key: 'exit' },
  ];

  onMenuItemClick(event) {
    console.info(event);
  }
}
