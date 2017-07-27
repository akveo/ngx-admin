import { Component } from '@angular/core';

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
    <canvas baseChart width="400" height="400"
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
  chartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            color: 'rgba(148,159,177,1)',
          },
          ticks: {
            fontColor: 'white',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: 'rgba(148,159,177,1)',
          },
          ticks: {
            fontColor: 'white',
          },
        },
      ],
    },
    legend: {
      labels: {
        fontColor: 'white',
      },
    },
  };
}
