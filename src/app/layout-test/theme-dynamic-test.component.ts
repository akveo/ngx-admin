/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';

import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'nga-dynamic-to-add',
  template: `
    <div>
      <strong>hello from dynamically inserted component</strong>
    </div>
  `,
})
export class NgaDynamicToAddComponent {}

@Component({
  selector: 'nga-dynamic-test',
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <a href="#" class="navbar-brand">Akveo</a>
        <button id="add-dynamic" (click)="addDynamicComponent()">Add Dynamic Copmonent</button>
        <button id="clear-dynamic" (click)="clearDynamicComponents()">Clear Dynamic Copmonents</button>
      </nga-layout-header>

      <nga-sidebar right>
          Sidebar content
      </nga-sidebar>

      <nga-layout-column>
        <nga-card>
          <nga-card-header>Hello</nga-card-header>
          <nga-card-body>
            Some Test content
          </nga-card-body>
        </nga-card>
      </nga-layout-column>


      <nga-layout-footer fixed>
        &copy; Akveo 2017
      </nga-layout-footer>
    </nga-layout>
`,
})
export class NgaThemeDynamicTestComponent {
  constructor(private themeService: NgaThemeService) {}

  addDynamicComponent() {
    this.themeService.appendToLayoutTop(NgaDynamicToAddComponent).subscribe(cRef => console.info(cRef));
  }

  clearDynamicComponents() {
    this.themeService.clearLayoutTop().subscribe(res => console.info(res));
  }
}
