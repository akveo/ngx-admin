import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { delay, takeWhile } from 'rxjs/operators';

// TODO: remove after function generator will be implemented
const easingFunctions = {
  bounceIn(k) {
    return 1 - easingFunctions.bounceOut(1 - k);
  },
  bounceOut(k) {
    if (k < (1 / 2.75)) {
      return easingFunctions.quarticOut(k);
    } else if (k < (2 / 2.75)) {
      return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
    } else if (k < (2.5 / 2.75)) {
      return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
    } else {
      return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
    }
  },
  quarticOut(k) {
    return 1 - (--k * k * k * k);
  },
  bounceInOut(k) {
    if (k < 0.5) {
      return easingFunctions.bounceIn(k * 2) * 0.5;
    }

    return easingFunctions.bounceOut(k * 2 - 1) * 0.5 + 0.5;
  },
};

@Component({
  selector: 'ngx-orders-chart',
  styleUrls: ['./charts-common.component.scss'],
  template: `
    <div echarts [options]="option" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class OrdersChartComponent implements AfterViewInit, OnDestroy {

  private alive = true;
  private greenLineData = [
    5, 63, 113, 156, 194, 225,
    250, 270, 283, 289, 290,
    286, 277, 264, 244, 220,
    194, 171, 157, 151, 150,
    152, 155, 160, 166, 170,
    167, 153, 135, 115, 97,
    82, 71, 64, 63, 62, 61,
    62, 65, 73, 84, 102,
    127, 159, 203, 259, 333,
  ];
  private purpleLineData = [
    6, 83, 148, 200, 240,
    265, 273, 259, 211,
    122, 55, 30, 28, 36,
    50, 68, 88, 109, 129,
    146, 158, 163, 165,
    173, 187, 208, 236,
    271, 310, 346, 375,
    393, 400, 398, 387,
    368, 341, 309, 275,
    243, 220, 206, 202,
    207, 222, 247, 286, 348,
  ];
  private blueLineData = [
    398, 348, 315, 292, 274,
    261, 251, 243, 237, 231,
    222, 209, 192, 172, 152,
    132, 116, 102, 90, 80, 71,
    64, 58, 53, 49, 48, 54, 66,
    84, 104, 125, 142, 156, 166,
    172, 174, 172, 167, 159, 149,
    136, 121, 105, 86, 67, 45, 22,
  ];

  echartsIntance: any;

  @Input()
  set period(value: string) {
    // TODO: move to service after function generator will be implemented
    if (this.option) {
      const series = this.option.series.map((line, index) => {
        return {
          ...line,
          data: Array.isArray(this.easingFunctionsSet[value][index]) ?
            this.easingFunctionsSet[value][index]
            : this.getLineData(this.easingFunctionsSet[value][index]),
        };
      });

      this.option = {
        ...this.option,
        series,
      };
    }
  }

  option: any;
  data: Array<any>;

  // TODO: remove after function generator will be implemented
  easingFunctionsSet = {
    week: [
      this.greenLineData,
      this.purpleLineData,
      this.blueLineData,
    ],
    month: [
      easingFunctions.bounceIn,
      easingFunctions.bounceInOut,
      easingFunctions.quarticOut,
    ],
    year: [
      easingFunctions.quarticOut,
      easingFunctions.bounceOut,
      easingFunctions.bounceIn,
    ],
  };

  constructor(private theme: NbThemeService) {
    const months = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec',
    ];

    this.data = this.greenLineData.map((p, index) => {
      const monthIndex = Math.round(index / 4);
      const label = (index % 4 === 0) ?  months[monthIndex] : '';

      return {
        label,
        value: p,
      };
    });
  }

  ngAfterViewInit(): void {
    this.theme.getJsTheme()
      .pipe(
        takeWhile(() => this.alive),
        delay(1),
      )
      .subscribe(config => {
        const eTheme: any = config.variables.orders;

        this.setOptions(eTheme);
      });
  }

  setOptions(eTheme) {
    this.option = {
      grid: {
        left: 40,
        top: 20,
        right: 0,
        bottom: 40,
      },
      tooltip: {
        trigger: 'item',
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
          return Math.round(parseInt(params.value, 10));
        },
        extraCssText: eTheme.tooltipExtraCss,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        offset: 5,
        data: this.data.map(i => i.label),
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: eTheme.xAxisTextColor,
          fontSize: 18,
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
          color: eTheme.xAxisTextColor,
          fontSize: 18,
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
        this.getGreenLine(eTheme),
        this.getPurpleLine(eTheme),
        this.getBlueLine(eTheme),
      ],
    };
  }

  getGreenLine(eTheme) {
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
            color: eTheme.greenLineGradFrom,
          }, {
            offset: 1,
            color: eTheme.greenLineGradTo,
          }]),
          shadowColor: eTheme.greenLineShadow,
          shadowBlur: 6,
          shadowOffsetY: 12,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.greenAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.greenAreaGradTo,
          }]),
        },
      },
      data: this.data.map(i => i.value),
    };
  }

  getPurpleLine(eTheme) {
    return         {
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
            color: eTheme.purpleLineGradFrom,
          }, {
            offset: 1,
            color: eTheme.purpleLineGradTo,
          }]),
          shadowColor: eTheme.purpleLineShadow,
          shadowBlur: 6,
          shadowOffsetY: 12,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.purpleAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.purpleAreaGradTo,
          }]),
        },
      },
      data: this.purpleLineData,
    };
  }

  getBlueLine(eTheme) {
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
            color: eTheme.blueLineGradFrom,
          }, {
            offset: 1,
            color: eTheme.blueLineGradTo,
          }]),
          shadowColor: eTheme.blueLineShadow,
          shadowBlur: 6,
          shadowOffsetY: 12,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.blueAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.blueAreaGradTo,
          }]),
        },
      },
      data: this.blueLineData,
    };
  }

  // TODO: remove after function generator will be implemented
  getLineData(easingFunction): number[] {
    const nPoint = 47;

    return Array.from(Array(nPoint)).map((_, index) => {
      const x = index / nPoint;

      return easingFunction(x) * 100;
    });
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      // Fix recalculation chart size
      // TODO: investigate more deeply
      setTimeout(() => {
        this.echartsIntance.resize();
      });
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
