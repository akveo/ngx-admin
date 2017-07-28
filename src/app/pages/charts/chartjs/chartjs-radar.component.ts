import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-chartjs-radar',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <canvas baseChart
            [datasets]="chartData"
            [labels]="chartLabels"
            [chartType]="chartType"
            [options]="chartOptions"></canvas>
  `,
})
export class ChartjsRadarComponent {
  chartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  chartType: string = 'radar';
  chartOptions: any;
  chartData: any[];

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {
      this.chartData = [
        {
          data: [65, 59, 90, 81, 56, 55, 40],
          label: 'Series A',
          borderColor: config.chartjsRadarColor1,
          backgroundColor: config.chartjsRadarColor1,
        },
        {
          data: [28, 48, 40, 19, 96, 27, 100],
          label: 'Series B',
          borderColor: config.chartjsRadarColor2,
          backgroundColor: config.chartjsRadarColor2,
        },
      ];

      this.chartOptions = {
        scaleFontColor: 'white',
        legend: {
          labels: {
            fontColor: config.chartjsRadarLegendTextColor,
          },
        },
        scale: {
          pointLabels: {
            fontSize: 14,
            fontColor: config.chartjsRadarPointLabelFontColor,
          },
          gridLines: {
            color: config.chartjsRadarScaleGridLinesColor,
          },
          angleLines: {
            color: config.chartjsRadarScaleAngleLinesColor,
          },
        },
      };
    });
  }
}
