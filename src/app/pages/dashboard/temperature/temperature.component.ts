import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

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

  colors: any;

  constructor(private theme: NbThemeService) {
    this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }
}
