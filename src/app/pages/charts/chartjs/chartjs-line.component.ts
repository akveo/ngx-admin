import { Component } from '@angular/core';

@Component({
  selector: 'ngx-chart-js-line',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <canvas baseChart
            [datasets]="lineChartData"
            [labels]="lineChartLabels"
            [options]="lineChartOptions"
            [legend]="lineChartLegend"
            [chartType]="lineChartType"></canvas>
  `,
})
export class ChartjsLineComponent {

  lineChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' },
  ];

  lineChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
          color: 'rgba(148,159,177,1)',
        },
        ticks: {
          fontColor: 'white',
        },
      }],
      yAxes: [{
        gridLines: {
          display: true,
          color: 'rgba(148,159,177,1)',
        },
        ticks: {
          fontColor: 'white',
        },
      }],
    },
    legend: {
      labels: {
        fontColor: 'white',
      },
    },
  };

  lineChartLegend: boolean = true;

  lineChartType: string = 'line';

}
