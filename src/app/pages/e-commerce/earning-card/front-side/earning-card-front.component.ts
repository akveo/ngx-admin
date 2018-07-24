import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { EarningService, LiveUpdateChart } from '../../../../@core/data/earning.service';

@Component({
  selector: 'ngx-earning-card-front',
  styleUrls: ['./earning-card-front.component.scss'],
  templateUrl: './earning-card-front.component.html',
})
export class EarningCardFrontComponent implements OnDestroy, OnInit {
  private alive = true;

  @Input() selectedCurrency: string = 'Bitcoin';

  currencies: string[] = ['Bitcoin', 'Tether', 'Ethereum'];
  currentTheme: string;
  earningLiveUpdateCardData: LiveUpdateChart;
  liveUpdateChartData: {value: [string, number]}[];
  timeTicket: any;


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
    clearInterval(this.timeTicket);

    this.timeTicket = setInterval( () => {
      this.earningService.generateRandomEarningLiveUpdateChartData(currency)
        .pipe(takeWhile(() => this.alive))
        .subscribe((liveUpdateChartData) => {
          this.liveUpdateChartData = [...liveUpdateChartData];
        });
    }, 100);
  }

  ngOnDestroy() {
    this.alive = false;

    clearInterval(this.timeTicket);
  }
}
