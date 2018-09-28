import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../../@core/data/layout.service';

@Component({
  selector: 'ngx-visitors-analytics-chart',
  styleUrls: ['./visitors-analytics-chart.component.scss'],
  template: `
    <div echarts
         [options]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class ECommerceVisitorsAnalyticsChartComponent implements AfterViewInit, OnDestroy {

  private alive = true;
  private innerLinePoints: number[] = [
    94, 188, 225, 244, 253, 254, 249, 235, 208,
    173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
    183, 224, 265, 302, 333, 358, 375, 388, 395,
    400, 400, 397, 390, 377, 360, 338, 310, 278,
    241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
  ];
  private outerLinePoints: number[] = [
    85, 71, 59, 50, 45, 42, 41, 44 , 58, 88,
    136 , 199, 267, 326, 367, 391, 400, 397,
    376, 319, 200, 104, 60, 41, 36, 37, 44,
    55, 74, 100 , 131, 159, 180, 193, 199, 200,
    195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
  ];
  private months: string[] = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ];

  option: any;
  data: Array<any>;
  themeSubscription: any;
  echartsIntance: any;

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {
    const outerLinePointsLength = this.outerLinePoints.length;
    const monthsLength = this.months.length;

    this.data = this.outerLinePoints.map((p, index) => {
      const monthIndex = Math.round(index / 4);
      const label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
        ?  this.months[monthIndex]
        : '';

      return {
        label,
        value: p,
      };
    });

    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngAfterViewInit(): void {
    this.theme.getJsTheme()
      .pipe(
        delay(1),
        takeWhile(() => this.alive),
      )
      .subscribe(config => {
        const eTheme: any = config.variables.visitors;

        this.setOptions(eTheme);
    });
  }

  setOptions(eTheme) {
    this.option = {
      grid: {
        left: 40,
        top: 20,
        right: 0,
        bottom: 60,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: eTheme.tooltipLineColor,
            width: eTheme.tooltipLineWidth,
          },
        },
        textStyle: {
          color: eTheme.tooltipTextColor,
          fontSize: 20,
          fontWeight: eTheme.tooltipFontWeight,
        },
        position: 'top',
        backgroundColor: eTheme.tooltipBg,
        borderColor: eTheme.tooltipBorderColor,
        borderWidth: 3,
        formatter: (params) => {
          return Math.round(parseInt(params[0].value, 10));
        },
        extraCssText: eTheme.tooltipExtraCss,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        offset: 25,
        data: this.data.map(i => i.label),
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: eTheme.axisTextColor,
          fontSize: eTheme.axisFontSize,
        },
        axisLine: {
          lineStyle: {
            color: eTheme.axisLineColor,
            width: '2',
          },
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: eTheme.axisLineColor,
            width: '1',
          },
        },
        axisLabel: {
          color: eTheme.axisTextColor,
          fontSize: eTheme.axisFontSize,
        },
        axisTick: {
          show: false,
        },
        splitLine: {

          lineStyle: {
            color: eTheme.yAxisSplitLine,
            width: '1',
          },
        },
      },
      series: [
        this.getInnerLine(eTheme),
        this.getOuterLine(eTheme),
      ],
    };
  }

  getOuterLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          color: '#ffffff',
            borderColor: eTheme.itemBorderColor,
            borderWidth: 2,
            opacity: 1,
        },
      },
      lineStyle: {
        normal: {
          width: eTheme.lineWidth,
          type: eTheme.lineStyle,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.lineGradFrom,
          }, {
            offset: 1,
            color: eTheme.lineGradTo,
          }]),
          shadowColor: eTheme.lineShadow,
          shadowBlur: 6,
          shadowOffsetY: 12,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.areaGradFrom,
          }, {
            offset: 1,
            color: eTheme.areaGradTo,
          }]),
        },
      },
      data: this.data.map(i => i.value),
    };
  }

  getInnerLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      tooltip: {
        show: false,
        extraCssText: '',
      },
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
          width: eTheme.innerLineWidth,
          type: eTheme.innerLineStyle,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.innerAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.innerAreaGradTo,
          }]),
          opacity: 1,
        },
      },
      data: this.innerLinePoints,
    };
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
