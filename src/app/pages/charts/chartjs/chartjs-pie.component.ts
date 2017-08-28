import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-chartjs-pie',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <canvas baseChart
            [data]="chartData"
            [labels]="chartLabels"
            [options]="chartOptions"
            [chartType]="chartType"></canvas>
  `,
})
export class ChartjsPieComponent {
  chartType: string = 'pie';
  chartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  chartData: number[] = [300, 500, 100];
  chartOptions: any;

  constructor(private theme: NbThemeService) {
    this.theme.getJsTheme().subscribe(config => {

      const chartjs: any = config.variables.chartjs;

      this.chartOptions = {
        responsive: true,
        scale: {
          pointLabels: {
            fontSize: 14,
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.xAxisColor,
              },
              ticks: {
                fontColor: chartjs.tickColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.yAxisColor,
              },
              ticks: {
                fontColor: chartjs.tickColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }
}
