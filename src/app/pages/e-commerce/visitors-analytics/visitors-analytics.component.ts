import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';

import { NgxLegendItemColor } from '../legend-chart/enum.legend-item-color';

@Component({
  selector: 'ngx-ecommerce-visitors-analytics',
  styleUrls: ['./visitors-analytics.component.scss'],
  templateUrl: './visitors-analytics.component.html',
})
export class ECommerceVisitorsAnalyticsComponent implements OnDestroy {
  private alive = true;

  chartLegend;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.name);
      });
  }

  setLegendItems(themeName: string): void {
    this.chartLegend = [
      {
        iconColor: themeName === 'cosmic' ?
          NgxLegendItemColor.BLUE :
          NgxLegendItemColor.GREEN,
        title: 'Unique Visitors',
      },
      {
        iconColor: NgxLegendItemColor.PURPLE,
        title: 'Page Views',
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
