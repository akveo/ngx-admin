import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  template: `
    <nga-card size="xmedium">
      <nga-tabset fullWidth>
        <nga-tab tabTitle="Temperature">
          <ngx-temperature-dragger [(value)]="temperature" [arcThickness]="20" [knobRadius]="15" [bottomAngle]="90"
             [disableArcColor]="themeConfig.layoutBg" 
             [fillColors]="[themeConfig.colorInfo, themeConfig.colorSuccess, themeConfig.colorWarning]">
          </ngx-temperature-dragger>
        </nga-tab>
        <nga-tab tabTitle="Humidity">
          <span>Content #2</span>
        </nga-tab>
      </nga-tabset>
    </nga-card>
  `,
})
export class TemperatureComponent {
  temperature = 0.5;

  themeConfig = {};

  constructor(private theme: NgaThemeService) {
    this.theme.getConfig().subscribe((config) => {
      this.themeConfig = config;
    });
  }
}
