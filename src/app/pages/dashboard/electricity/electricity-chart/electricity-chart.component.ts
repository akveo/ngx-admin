import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../../@core/data/layout.service';

@Component({
  selector: 'ngx-electricity-chart',
  styleUrls: ['./electricity-chart.component.scss'],
  template: `
    <div echarts
         [options]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class ElectricityChartComponent implements AfterViewInit, OnDestroy {

  private alive = true;

  option: any;
  data: Array<any>;
  echartsIntance: any;

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {

    const points = [490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630,
      720, 800, 840, 860, 870, 870, 860, 840, 800, 720, 200, 145, 130, 130,
      145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350, 340,
      340, 340, 340, 340, 340, 340, 340, 340];

    this.data = points.map((p, index) => ({
      label: (index % 5 === 3) ? `${Math.round(index / 5)}` : '',
      value: p,
    }));

    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngAfterViewInit(): void {
    this.theme.getJsTheme()
      .pipe(
        takeWhile(() => this.alive),
        delay(1),
      )
      .subscribe(config => {
        const eTheme: any = config.variables.electricity;

        this.option = {
          grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 80,
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
            formatter: '{c0} kWh',
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
                color: eTheme.yAxisSplitLine,
                width: '1',
              },
            },
          },
          series: [
            {
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
            },

            {
              type: 'line',
              smooth: true,
              symbol: 'none',
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
                  shadowColor: eTheme.shadowLineDarkBg,
                  shadowBlur: 14,
                  opacity: 1,
                },
              },
              data: this.data.map(i => i.value),
            },
          ],
        };
    });
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
