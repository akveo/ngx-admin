import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

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

  constructor(private theme: NbThemeService) {
    this.theme.getJsTheme().subscribe(config => {

      const chartjs: any = config.variables.chartjs;

      this.chartData = [
        {
          data: [65, 59, 90, 81, 56, 55, 40],
          label: 'Series A',
          borderColor: chartjs.radar.colors[0],
          backgroundColor: chartjs.radar.colors[0],
        },
        {
          data: [28, 48, 40, 19, 96, 27, 100],
          label: 'Series B',
          borderColor: chartjs.radar.colors[1],
          backgroundColor: chartjs.radar.colors[1],
        },
      ];

      this.chartOptions = {
        scaleFontColor: 'white',
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scale: {
          pointLabels: {
            fontSize: 14,
            fontColor: chartjs.radar.pointLabelFontColor,
          },
          gridLines: {
            color: chartjs.radar.scaleGridLinesColor,
          },
          angleLines: {
            color: chartjs.radar.scaleAngleLinesColor,
          },
        },
      };
    });
  }
}
