import { Component } from '@angular/core';

@Component({
  selector: 'ngx-chartjs-bar-horizontal',
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
export class ChartjsBarHorizontalComponent {
  chartData = [
    {
      label: 'Dataset 1',
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 1,
      data: [
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
      ],
    },
    {
      label: 'Dataset 2',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
      ],
    },
  ];
  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartOptions = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      rectangle: {
        borderWidth: 2,
      },
    },
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  };
  chartLegend: boolean = true;
  chartType: string = 'horizontalBar';

  private randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }
}
