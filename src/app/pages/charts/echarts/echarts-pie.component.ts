import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent {
  options: any;

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {

      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: echarts.pie.colors,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
          textStyle: {
            color: echarts.legendTextColor,
          },
        },
        series: [
          {
            name: 'Countries',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {
                value: 335,
                name: 'Germany',
              },
              {
                value: 310,
                name: 'France',
              },
              {
                value: 234,
                name: 'Canada',
              },
              {
                value: 135,
                name: 'Russia',
              },
              {
                value: 1548,
                name: 'USA',
              },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.pie.itemHoverShadowColor,
              },
            },
          },
        ],
      };
    });
  }
}
