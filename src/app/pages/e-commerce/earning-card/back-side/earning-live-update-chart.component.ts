import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-earning-live-update-chart',
  styleUrls: ['earning-card-back.component.scss'],
  template: `
    <div echarts
         class="echart"
         [options]="option"
         (chartInit)="onChartInit($event)"></div>
  `,
})
export class EarningLiveUpdateChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  private alive = true;

  @Input() liveUpdateChartData: number[];

  option: any;
  themeSubscription: any;
  timeTicket: any;
  echartsInstance;

  constructor(private theme: NbThemeService) {
  }


  ngOnChanges(): void {
    if (this.option) {
      this.updateChartOptions(this.liveUpdateChartData);
    }
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme()
      .pipe(
        delay(1),
        takeWhile(() => this.alive)
      )
      .subscribe(config => {
        const trafficTheme: any = config.variables.traffic;

        clearInterval(this.timeTicket);

        this.setChartOption(trafficTheme);
        this.appendRandomData();
    });
  }

  appendRandomData() {
    // TODO: move from this file, set new data as input
    let newPoints = [...this.liveUpdateChartData];

    this.timeTicket = setInterval( () => {
      const max = 500;
      const min = 300;
      const newItem = Math.floor(Math.random() * (max - min + 1) + min);

      newPoints.shift();
      newPoints.push(newItem);

      this.echartsInstance.setOption({
        series: [{
          data: newPoints
        }]
      });
    }, 700);
  }

  setChartOption(trafficTheme) {
    this.option = {
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.liveUpdateChartData,
      },
      yAxis: {
        boundaryGap: [0, '5%'],
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },

      tooltip: {
        show: false,
        extraCssText: '',
      },
      series: [
        {
          type: 'line',
          symbol: 'circle',
          sampling: 'average',
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 0,
            },
          },
          lineStyle: {
            normal: {
              width: 0,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: trafficTheme.gradFrom,
              }, {
                offset: 1,
                color: trafficTheme.gradTo,
              }]),
              opacity: 1,
            },
          },
          data: this.liveUpdateChartData,
        },
      ],
    };
  }

  updateChartOptions(chartData: number[]) {
    clearInterval(this.timeTicket);

    this.echartsInstance.setOption({
      series: [{
        data: chartData
      }]
    });

    this.appendRandomData();
  }

  ngOnDestroy() {
    this.alive = false;

    clearInterval(this.timeTicket);
  }
}
