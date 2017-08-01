import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

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
  chartData: any[];
  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartLegend: boolean = true;
  chartType: string = 'horizontalBar';
  chartOptions: any;

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {

      const chartjs: any = config.variables.chartjs;

      this.chartData = [
        {
          label: 'Dataset 1',
          backgroundColor: chartjs.barHorizontal.colors[0],
          borderColor: chartjs.barHorizontal.colors[0],
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
          backgroundColor: chartjs.barHorizontal.colors[1],
          borderColor: chartjs.barHorizontal.colors[1],
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

      this.chartOptions = {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
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
          position: 'right',
          labels: {
            fontColor: chartjs.legendTextColor,
          },
        },
      };
    });
  }

  private randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }
}
