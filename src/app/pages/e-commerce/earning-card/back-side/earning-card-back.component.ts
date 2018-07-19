import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
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
  earningLiveUpdateChartData: LiveUpdateChart;


  constructor(private themeService: NbThemeService,
              private earningService: EarningService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;

        this.getEarningLiveUpdateChartData(this.selectedCurrency);
      });
  }

  changeCurrency(currency) {
    if (this.selectedCurrency !== currency) {
      this.selectedCurrency = currency;

      this.getEarningLiveUpdateChartData(currency);
    }
  }

  getEarningLiveUpdateChartData(currency: string) {
    this.earningService.getEarningLiveUpdateChartData(currency)
      .pipe(takeWhile(() => this.alive))
      .subscribe((earningLiveUpdateChartData) => {
        this.earningLiveUpdateChartData = earningLiveUpdateChartData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
