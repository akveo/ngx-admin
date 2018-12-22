import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { Electricity, ElectricityService } from '../../../@core/data/electricity.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy {

  private alive = true;

  data: Electricity[];

  type = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private eService: ElectricityService, private themeService: NbThemeService) {
    this.eService.getListData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.data = data;
      });

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
