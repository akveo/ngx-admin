import { Component, Input } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

declare const echarts: any;

@Component({
  selector: 'ngx-solar',
  styleUrls: ['./solar.component.scss'],
  template: `
    <div echarts [options]="option" class="echart">
    </div>
    <div class="info">
      <h5 class="mb-3">June 7, 2017</h5>
      <h2 class="text-success">6. 421 kWh</h2>
      <h5><span class="text-hint">out of</span> 8.421 kWh</h5>
    </div>
  `,
})
export class SolarComponent {

  @Input('chartValue')
  set chartValue (value: number) {
    this.option.series[0].data[0].value = value;
    this.option.series[0].data[1].value = 100 - value;
    this.option.series[1].data[0].value = value;
  }

  option: any = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        name: ' ',
        clockWise: true,
        hoverAnimation: false,
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['70%', '90%'],
        data: [
          {
            value: 72,
            name: ' ',
            label: {
              normal: {
                position: 'center',
                formatter: '{d}%',
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold',
                  color: 'red',
                  fontFamily: 'Exo',
                },
              },
            },
            tooltip: {
              show: false,
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#7bff24',
                }, {
                  offset: 1,
                  color: '#2ec7fe',
                }]),
                shadowColor: '#19977E',
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 3,
              },
            },
            hoverAnimation: false,
          },
          {
            value: 28,
            name: ' ',
            tooltip: {
              show: false,
            },
            label: {
              normal: {
                position: 'inner',
              },
            },
            itemStyle: {
              normal: {
                color: 'none',
              },
            },
          },
        ],
      },
      {
        name: ' ',
        clockWise: true,
        hoverAnimation: false,
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['70%', '90%'],
        data: [
          {
            value: 72,
            name: ' ',
            label: {
              normal: {
                position: 'inner',
                show: false,
              },
            },
            tooltip: {
              show: false,
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#7bff24',
                }, {
                  offset: 1,
                  color: '#2ec7fe',
                }]),
                shadowColor: 'rgba(0, 217, 119, 0.3)',
                shadowBlur: 7,
              },
            },
            hoverAnimation: false,
          },
          {
            value: 28,
            name: ' ',
            tooltip: {
              show: false,
            },
            label: {
              normal: {
                position: 'inner',
              },
            },
            itemStyle: {
              normal: {
                color: 'none',
              },
            },
          },
        ],
      },
    ],
  };

  constructor(private theme: NgaThemeService) {
    this.theme.getConfig().subscribe(config => {

      const option = Object.assign({}, this.option);

      option.series[0].data[1].itemStyle.normal.color = config.layoutBg;
      option.series[0].data[0].label.normal.textStyle.color = config.colorFgHeading;
      option.series[0].data[0].label.normal.textStyle.fontFamily = config.fontSecondary;

      this.option = option;
    });
  }
}
