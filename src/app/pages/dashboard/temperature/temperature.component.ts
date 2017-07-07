import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  template: `
    <nga-card size="xmedium">
      <nga-tabset fullWidth>
        <nga-tab tabTitle="Temperature">
          <ngx-temperature-dragger [(value)]="temperature" (power)="powerOff = !$event" [min]="12" [max]="30"
             [arcThickness]="20" [knobRadius]="15" [bottomAngle]="90" [disableArcColor]="themeConfig.layoutBg" 
             [fillColors]="[themeConfig.colorInfo, themeConfig.colorSuccess, themeConfig.colorWarning]">

            <div class="temperature"  [ngClass]="{ 'off': powerOff }">
              <div class="value">
                {{ powerOff ? '--' : (temperature | ngxRound) }}
              </div>
              <div class="desc">
                Celsius
              </div>  
            </div>
            
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

  temperature: number = 23;
  powerOff: boolean = false;

  themeConfig: any = {};

  constructor(private theme: NgaThemeService) {
    this.theme.getConfig().subscribe(config => {
      this.themeConfig = config;
    });
  }
}
