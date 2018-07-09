import { AfterViewInit, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { delay, takeWhile } from 'rxjs/operators';

import { OrdersChart } from '../../../../@core/data/orders-chart.service';

@Component({
  selector: 'ngx-orders-chart',
  styleUrls: ['./charts-common.component.scss'],
  template: `
    <div echarts [options]="option" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class OrdersChartComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input()
  ordersChartData: OrdersChart;

  private alive = true;

  echartsIntance: any;
  option: any;

  ngOnChanges(): void {
    if (this.option) {
      this.updateOrdersChartOptions(this.ordersChartData);
    }
  }


  constructor(private theme: NbThemeService) {
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
        this.updateOrdersChartOptions(this.ordersChartData);
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
        data: [],
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
        this.getFirstLine(eTheme),
        this.getSecondleLine(eTheme),
        this.getThirdLine(eTheme),
      ],
    };
  }

  getFirstLine(eTheme) {
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
      data: [],
    };
  }

  getSecondleLine(eTheme) {
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
      data: [],
    };
  }

  getThirdLine(eTheme) {
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
      data: [],
    };
  }

  updateOrdersChartOptions(ordersChartData: OrdersChart) {
    const options = this.option;
    const series = this.getNewSeries(options.series, ordersChartData.linesData);
    const xAxis = this.getNewXAxis(options.xAxis, ordersChartData.chartLabel);

    this.option = {
      ...options,
      xAxis,
      series,
    };
  }

  getNewSeries(series, linesData: number[][]) {
    return series.map((line, index) => {
      return {
        ...line,
        data: linesData[index],
      };
    });
  }

  getNewXAxis(xAxis, chartLabel: string[]) {
    return {
      ...xAxis,
      data: chartLabel,
    };
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
