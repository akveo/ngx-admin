import { Component } from '@angular/core';

@Component({
  selector: 'ngx-chart-js-bar',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <canvas baseChart
          [datasets]="barChartData"
          [labels]="barChartLabels"
          [options]="barChartOptions"
          [legend]="barChartLegend"
          [chartType]="barChartType"></canvas>
  `,
})
export class ChartjsBarComponent {

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white',
      },
    },
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
  };

  barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  barChartType: string = 'bar';

  barChartLegend: boolean = true;

  barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

}
