import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {MetadataService} from '../../../../../src/app/@core/utils/metadata.service';

@Component({
  selector: 'ngx-material-landing',
  templateUrl: './material-landing.component.html',
  styleUrls: [
    './material-landing.component.scss',
    '../landing-home.component.scss',
  ],
})
export class MaterialLandingComponent {
  constructor(private themeService: NbThemeService, private metadataService: MetadataService) {
    this.metadataService.updateDescription('Ngx-admin material works perfectly with Angular Material and Nebular.' +
      ' Over 40+ Angular Components and 60+ Usage Examples.Take the best from both!');
    this.metadataService.updateTitle('New Material theme of ngx-admin dashboard template based on Angular 9+');
    this.themeService.changeTheme('ngx-landing-material');
  }
}
