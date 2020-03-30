import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-material-landing',
  templateUrl: './material-landing.component.html',
  styleUrls: [
    './material-landing.component.scss',
    '../landing-home.component.scss',
  ],
})
export class MaterialLandingComponent {
  constructor(private themeService: NbThemeService) {
    this.themeService.changeTheme('ngx-landing-material');
  }
}
