import { AfterViewInit, Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

declare const echarts: any;

const points = [300, 520, 435, 530, 730, 620, 660, 860];

@Component({
  selector: 'ngx-traffic-chart',
  styleUrls: ['./traffic.component.scss'],
  template: `
    <div echarts [options]="option" class="echart"></div>
  `,
})
export class TrafficChartComponent implements AfterViewInit {

  type: string = 'month';
  types = ['week', 'month', 'year'];
  option: any = {};

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.theme.getJsTheme().delay(1).subscribe(config => {

      const trafficTheme: any = config.variables.traffic;

      this.option = Object.assign({}, {
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: points,
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
            show: true,
            lineStyle: {
              color: trafficTheme.colorBlack,
              opacity: 0.06,
              width: '1',
            },
          },
        },
        tooltip: {
          axisPointer: {
            type: 'shadow',
          },
          position: 'top',
          backgroundColor: trafficTheme.tooltipBg,
          borderColor: config.variables.colorSuccess,
          borderWidth: 3,
          formatter: '{c0} MB',
          extraCssText: `box-shadow: 0px 2px 46px 0 ${trafficTheme.tooltipBg};border-radius: 10px;padding: 5px 20px;`,
        },
        series: [
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            sampling: 'average',
            silent: true,
            itemStyle: {
              normal: {
                color: trafficTheme.lineBg,
              },
              emphasis: {
                color: 'rgba(0,0,0,0)',
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: trafficTheme.lineBg,
              },
            },
            data: points.map(p => p - 15),
          },
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: trafficTheme.shadowLineBg,
                borderColor: 'white',
                borderWidth: 2,
                shadowColor: trafficTheme.shadowLineShadow,
                shadowOffsetX: 0,
                shadowOffsetY: -3,
                shadowBlur: 10,
              },
              emphasis: {
                color: 'white',
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 5,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: trafficTheme.lineBg,
                shadowColor: trafficTheme.shadowLineDarkBg,
                shadowBlur: 14,
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
              },
            },
            data: points,
          },
        ],
      });
    });
  }
}
