import { AfterViewInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'ngx-ec-map-chart',
  styleUrls: ['./ec-map-chart.component.scss'],
  template: `
    <div class="header">
      <span class="title">Selected country</span>
      <h4>{{countryName}}</h4>
    </div>
    <div echarts [options]="option" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class EcMapChartComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() countryName: string;
  @Input() data: number[];
  @Input() maxValue: number;
  @Input() labels: string[];

  option: any = {};
  themeSubscription: any;
  echartsInstance;

  constructor(private theme: NbThemeService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.data.isFirstChange() && !changes.labels.isFirstChange()) {
      this.echartsInstance.setOption({
        series: [{
          data: this.data.map(v => this.maxValue),
        }, {
          data: this.data,
        }],
        yAxis: {
          data: this.labels,
        },
      })
    }
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const countriesTheme: any = config.variables.countriesStatistics;

      this.option = Object.assign({}, {
        grid: {
          left: '3%',
          right: '3%',
          bottom: '3%',
          top: '3%',
          containLabel: true,
        },
        xAxis: {
          axisLabel: {
            color: countriesTheme.chartAxisTextColor,
            fontSize: 18,
          },
          axisLine: {
            lineStyle: {
              color: countriesTheme.chartAxisLineColor,
              width: '2',
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: countriesTheme.chartAxisSplitLine,
              width: '1',
            },
          },
        },
        yAxis: {
          data: this.labels,
          axisLabel: {
            color: countriesTheme.chartAxisTextColor,
            fontSize: 18,
          },
          axisLine: {
            lineStyle: {
              color: countriesTheme.chartAxisLineColor,
              width: '2',
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          { // For shadow
            type: 'bar',
            data: this.data.map(v => this.maxValue),
            cursor: 'default',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0.05)',
              },
              opacity: 1,
            },
            barWidth: '30%',
            barGap: '-100%',
            barCategoryGap: '30%',
            animation: false,
          },
          {
            type: 'bar',
            barWidth: '30%',
            data: this.data,
            cursor: 'default',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 0,
                  color: countriesTheme.chartGradientFrom,
                }, {
                  offset: 1,
                  color: countriesTheme.chartGradientTo,
                }]),
                opacity: 1,
                shadowColor: countriesTheme.chartGradientFrom,
                shadowBlur: 5,
              },
            },
          },
        ],
      });
    });
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

}
