import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { interval } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { EarningService, LiveUpdateChart } from '../../../../@core/data/earning.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ngx-earning-card-front',
  styleUrls: ['./earning-card-front.component.scss'],
  templateUrl: './earning-card-front.component.html',
})
export class EarningCardFrontComponent implements OnDestroy, OnInit {
  private alive = true;

  @Input() selectedCurrency: string = 'Bitcoin';

  intervalSubscription: Subscription;
  currencies: string[] = ['Bitcoin', 'Tether', 'Ethereum'];
  currentTheme: string;
  earningLiveUpdateCardData: LiveUpdateChart;
  liveUpdateChartData: { value: [string, number] }[];

  constructor(private themeService: NbThemeService,
              private earningService: EarningService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.getEarningCardData(this.selectedCurrency);
  }

  changeCurrency(currency) {
    if (this.selectedCurrency !== currency) {
      this.selectedCurrency = currency;

      this.getEarningCardData(this.selectedCurrency);
    }
  }

  private getEarningCardData(currency) {
    this.earningService.getEarningLiveUpdateCardData(currency)
      .pipe(takeWhile(() => this.alive))
      .subscribe((earningLiveUpdateCardData) => {
        this.earningLiveUpdateCardData = earningLiveUpdateCardData;
        this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;

        this.startReceivingLiveData(currency);
      });
  }

  startReceivingLiveData(currency) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(200)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.earningService.generateRandomEarningData(currency)),
      )
      .subscribe((liveUpdateChartData) => {
        this.liveUpdateChartData = [...liveUpdateChartData];
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
