import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { EarningService, LiveUpdateChart } from '../../../../@core/data/earning.service';

@Component({
  selector: 'ngx-earning-card-back',
  styleUrls: ['./earning-card-back.component.scss'],
  templateUrl: './earning-card-back.component.html',
})
export class EarningCardBackComponent implements OnDestroy {
  private alive = true;

  @Input() selectedCurrency: string = 'Bitcoin';

  currencies: string[] = ['Bitcoin', 'Tether', 'Ethereum'];
  currentTheme: string;
  earningLiveUpdateChartData: LiveUpdateChart = new LiveUpdateChart();
  timeTicket: any;


  constructor(private themeService: NbThemeService,
              private earningService: EarningService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;

        this.startReceivingLiveData(this.selectedCurrency);
      });
  }

  changeCurrency(currency) {
    if (this.selectedCurrency !== currency) {
      this.selectedCurrency = currency;

      clearInterval(this.timeTicket);
      this.startReceivingLiveData(this.selectedCurrency);
    }
  }

  private startReceivingLiveData(currency) {
    this.timeTicket = setInterval( () => {
      this.earningService.getEarningLiveUpdateChartData(currency)
        .pipe(takeWhile(() => this.alive))
        .subscribe((earningLiveUpdateChartData) => {
          this.earningLiveUpdateChartData = earningLiveUpdateChartData;
        });
    }, 100);
  }

  ngOnDestroy() {
    this.alive = false;
    clearInterval(this.timeTicket);
  }
}
