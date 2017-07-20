import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent {

  temperature: number = 24;
  temperatureOff: boolean = false;
  temperatureMode = 'cool';

  humidity: number = 87;
  humidityOff: boolean = false;
  humidityMode = 'heat';

  themeConfig: any = {};

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {
      this.themeConfig = config;
    });
  }
}
