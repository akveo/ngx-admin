/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {MetadataService} from '../../../../src/app/@core/utils/metadata.service';

@Component({
  selector: 'ngx-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss'],
})
export class LandingHomeComponent {
  constructor(private themeService: NbThemeService, private metadataService: MetadataService) {
    this.metadataService.updateDescription('Save more than $33,000 using ngx-admin for personal and commercial' +
      ' use. The dashboard is based on Angular 15+ and Bootstrap 4+. Completely FREE and MIT licensed.');
    this.metadataService.updateTitle('Ngx-admin - most popular admin dashboard on Angular 15+ and Nebular.');
    this.themeService.changeTheme('ngx-landing');
  }
}
