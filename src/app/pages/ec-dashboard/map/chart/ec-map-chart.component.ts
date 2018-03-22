import {Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ChartComponent } from 'angular2-chartjs';


@Component({
  selector: 'ngx-ec-map-chart',
  styleUrls: ['./ec-map-chart.component.scss'],
  template: `
    <chart type="horizontalBar" [data]="data" [options]="options"></chart>
  `,
})
export class EcMapChartComponent implements OnDestroy, OnChanges {

  @ViewChild(ChartComponent) chart: ChartComponent;


  @Input() categories: string[];
  @Input() values: number[];

  data: any;
  options: any;
  themeSubscription: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.categories && !changes.categories.isFirstChange()) {
      this.chart.chart.data.labels = changes.categories.currentValue;
      this.chart.chart.update();
    }
    if (changes.values && !changes.values.isFirstChange()) {
      this.data.datasets[0].data = changes.values.currentValue;
      this.chart.chart.update();
    }
  }

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: this.categories,
        datasets: [{
          label: 'Categories',
          backgroundColor: colors.infoLight,
          borderWidth: 1,
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
        }],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
                beginAtZero: true,
                max: 10,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private random() {
    return Math.round(Math.random() * 10);
  }
}
