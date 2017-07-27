import { Component } from '@angular/core';

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
        [chartType]="chartType"></canvas>
  `,
})
export class ChartjsRadarComponent {
  chartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  chartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
  ];
  chartType: string = 'radar';
}
