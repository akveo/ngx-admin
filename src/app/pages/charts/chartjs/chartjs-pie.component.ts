import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

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

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {
      this.chartOptions = {
        responsive: true,
        scale: {
          pointLabels: {
            fontSize: 14,
            fontColor: config.chartjsRadarPointLabelFontColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: config.chartjsPieXAxisColor,
              },
              ticks: {
                fontColor: config.chartjsPitTickColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: config.chartjsPieYAxisColor,
              },
              ticks: {
                fontColor: config.chartjsPieTickColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: config.chartjsPieLegendTextColor,
          },
        },
      };
    });
  }
}
