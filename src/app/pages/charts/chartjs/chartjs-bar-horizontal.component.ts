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
      this.chartData = [
        {
          label: 'Dataset 1',
          backgroundColor: config.chartjsBarHorizontalColor1,
          borderColor: config.chartjsBarHorizontalColor1,
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
          backgroundColor: config.chartjsBarHorizontalColor2,
          borderColor: config.chartjsBarHorizontalColor2,
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
                color: config.chartjsBarHorizontalXAxisColor,
              },
              ticks: {
                fontColor: config.chartjsBarHorizontalTickColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: config.chartjsBarHorizontalYAxisColor,
              },
              ticks: {
                fontColor: config.chartjsBarHorizontalTickColor,
              },
            },
          ],
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: config.chartjsBarHorizontalLegendTextColor,
          },
        },
      };
    });
  }

  private randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }
}
