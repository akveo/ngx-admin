import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {

  temperature = 24;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  temperatureColors: string[] = [];
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
      this.temperatureColors = [...config.variables.temperature as any[]];
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
