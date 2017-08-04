import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { ElectricityService } from '../../../@core/data/electricity.service';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent {

  data: Array<any>;

  type: string = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;

  constructor(private eService: ElectricityService, private themeService: NbThemeService) {
    this.data = eService.getData();

    this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }
}
