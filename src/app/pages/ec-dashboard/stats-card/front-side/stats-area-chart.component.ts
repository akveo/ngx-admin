import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-stats-ares-chart',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class StatsAreaChartComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;

      this.data = {
        labels: ['2006', '2007', '2008', '2010', '2011', '2012'],
        datasets: [{
          // todo move to config
          borderColor: '#fff',
          pointBackgroundColor: '#fff',
          backgroundColor: colors.success,
          lineTension: 0.000001,
          fill: 'origin',
          data: [65, 59, 80, 56, 90, 60],
        }],
      };

      this.options = {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          filler: {
            propagate: true,
          },
        },
      }
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
