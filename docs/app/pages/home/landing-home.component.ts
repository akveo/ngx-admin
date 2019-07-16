/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss'],
})
export class LandingHomeComponent {

  constructor(private themeService: NbThemeService) {
    this.themeService.changeTheme('ngx-landing');
  }
}
