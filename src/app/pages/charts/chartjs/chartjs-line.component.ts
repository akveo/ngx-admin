import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-chartjs-line',
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
            [options]="chartOptions"
            [legend]="chartLegend"
            [chartType]="chatyType"></canvas>
  `,
})
export class ChartjsLineComponent {
  chartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' },
  ];
  chartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartLegend: boolean = true;
  chatyType: string = 'line';
  chartOptions: any;

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {

      const chartjs: any = config.variables.chartjs;

      this.chartOptions = {
        responsive: true,
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
            fontColor: chartjs.legendTextColor,
          },
        },
      };
    });
  }
}
