import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Temperature, TemperatureHumidityService } from '../../../@core/data/temperature-humidity.service';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {

  private alive = true;

  temperatureData: Temperature;
  temperature: number;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidityData: Temperature;
  humidity: number;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private temperatureHumidityService: TemperatureHumidityService) {
    this.theme.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
      this.colors = config.variables;
    });

    forkJoin(
      this.temperatureHumidityService.getTemperatureData(),
      this.temperatureHumidityService.getHumidityData(),
    )
      .subscribe((data) => {
        this.temperatureData = data[0];
        this.temperature = this.temperatureData.value;

        this.humidityData = data[1];
        this.humidity = this.humidityData.value;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
