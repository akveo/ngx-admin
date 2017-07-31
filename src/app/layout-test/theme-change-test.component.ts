/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'nga-change-theme-test',
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <a href="#" class="navbar-brand">Akveo</a>
        <button id="change-theme" (click)="changeTheme()">Change Theme</button>
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
export class NgaThemeChangeTestComponent {
  currentTheme = 'default';

  constructor(private themeService: NgaThemeService) {}

  changeTheme() {
    this.currentTheme = this.currentTheme === 'default' ? 'blue' : 'default';
    this.themeService.changeTheme(this.currentTheme);
  }
}
