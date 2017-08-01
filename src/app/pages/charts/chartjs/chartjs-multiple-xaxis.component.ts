import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-chartjs-multiple-xaxis',
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
            [chartType]="chartType"></canvas>
  `,
})
export class ChartjsMultipleXaxisComponent {
  chartType: string = 'line';
  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartLegend: boolean = true;
  chartData: any[] = [
    {
      label: 'dataset - big points',
      data: [
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
      ],
      backgroundColor: 'red',
      borderColor: 'red',
      fill: false,
      borderDash: [5, 5],
      pointRadius: 15,
      pointHoverRadius: 10,
    },
    {
      label: 'dataset - individual point sizes',
      data: [
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
      ],
      backgroundColor: 'blue',
      borderColor: 'blue',
      fill: false,
      borderDash: [5, 5],
      pointRadius: [2, 4, 6, 18, 0, 12, 20],
    },
    {
      label: 'dataset - large pointHoverRadius',
      data: [
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
      ],
      backgroundColor: 'green',
      borderColor: 'green',
      fill: false,
      pointHoverRadius: 30,
    },
    {
      label: 'dataset - large pointHitRadius',
      data: [
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
      ],
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      fill: false,
      pointHitRadius: 20,
    },
  ];
  chartOptions: any;

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {

      const chartjs: any = config.variables.chartjs;

      this.chartOptions = {
        responsive: true,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: chartjs.legendTextColor,
          },
        },
        hover: {
          mode: 'index',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
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
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value',
              },
              gridLines: {
                display: true,
                color: chartjs.xAxisColor,
              },
              ticks: {
                fontColor: chartjs.tickColor,
              },
            },
          ],
        },
      };
    });
  }

  private randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }
}
