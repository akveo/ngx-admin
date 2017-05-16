import { Component } from '@angular/core';

@Component({
  selector: 'ngx-chart-js-pie',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <canvas baseChart
            [data]="pieChartData"
            [labels]="pieChartLabels"
            [options]="pieChartOptions"
            [chartType]="pieChartType"></canvas>
  `,
})
export class ChartJsPieComponent {

  pieChartType: string = 'pie';
  pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  pieChartData: number[] = [300, 500, 100];
  pieChartOptions: any = {
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

}
