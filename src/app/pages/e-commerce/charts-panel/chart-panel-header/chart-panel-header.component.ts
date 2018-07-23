import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'ngx-chart-panel-header',
  styleUrls: ['./chart-panel-header.component.scss'],
  templateUrl: './chart-panel-header.component.html',
})
export class ChartPanelHeaderComponent implements OnDestroy {

  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'week';
  types: string[] = ['week', 'month', 'year'];

  chartLegend: {iconColor: string; title: string}[];

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        const orderProfitLegend = theme.variables.orderProfitLegend;

        this.currentTheme = theme.name;
        this.setLegendItems(orderProfitLegend);
      });
  }

  setLegendItems(orderProfitLegend) {
    this.chartLegend = [
      {
        iconColor: orderProfitLegend.firstItem,
        title: 'Payment',
      },
      {
        iconColor: orderProfitLegend.secondItem,
        title: 'Canceled',
      },
      {
        iconColor: orderProfitLegend.thirdItem,
        title: 'All orders',
      },
    ];
  }

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
