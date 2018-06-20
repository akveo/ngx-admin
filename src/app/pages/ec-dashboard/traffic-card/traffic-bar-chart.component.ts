import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

declare const echarts: any;

@Component({
  selector: 'ngx-traffic-bar-chart',
  styleUrls: ['traffic-card.component.scss'],
  template: `
    <div echarts [options]="option" class="echart"></div>
  `,
})
export class TrafficBarChartComponent implements AfterViewInit, OnDestroy {

  type = 'month';
  types = ['week', 'month', 'year'];
  option: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const trafficTheme: any = config.variables.trafficBarEchart;

      this.option = Object.assign({}, {
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type : 'category',
          data :
            ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
          axisLabel: {
            color: trafficTheme.textColor
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          show: false,
        },
        tooltip: {
          axisPointer: {
            type: 'shadow',
          },
          textStyle: {
            color: trafficTheme.tooltipTextColor,
            fontWeight: trafficTheme.tooltipFontWeight,
            fontSize: 16,
          },
          position: 'top',
          backgroundColor: trafficTheme.tooltipBg,
          borderColor: trafficTheme.tooltipBorderColor,
          borderWidth: 3,
          formatter: '{c0} MB',
          extraCssText: trafficTheme.tooltipExtraCss,
        },
        series: [
          {
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220, 10, 52, 200, 334, 390, 330, 220, 99],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: trafficTheme.gradientFrom,
                }, {
                  offset: 1,
                  color: trafficTheme.gradientTo,
                }]),
                opacity: 1,
                shadowColor: trafficTheme.gradientFrom,
                shadowBlur: 5,
              },
            },
          },
        ],
      });
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

}
