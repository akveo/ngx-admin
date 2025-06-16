import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

interface CardSettings {
  title: string;
  value: string;
  unitOfMeasurement: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  // Key metrics for IdentityPulse
  verificationCard: CardSettings = {
    title: 'Total Verifications',
    value: '1,247',
    unitOfMeasurement: 'today',
    iconClass: 'nb-checkmark-circle',
    type: 'primary',
  };
  
  matchRateCard: CardSettings = {
    title: 'Average Match Rate',
    value: '87.3',
    unitOfMeasurement: '%',
    iconClass: 'nb-bar-chart',
    type: 'success',
  };
  
  countriesCard: CardSettings = {
    title: 'Active Countries',
    value: '4',
    unitOfMeasurement: 'regions',
    iconClass: 'nb-location',
    type: 'info',
  };
  
  apiResponseCard: CardSettings = {
    title: 'API Response Time',
    value: '245',
    unitOfMeasurement: 'ms',
    iconClass: 'nb-gear',
    type: 'warning',
  };

  statusCards: CardSettings[];

  commonStatusCardsSet: CardSettings[] = [
    this.verificationCard,
    this.matchRateCard,
    this.countriesCard,
    this.apiResponseCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
    marketsoft: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: this.commonStatusCardsSet,
    dark: this.commonStatusCardsSet,
    marketsoft: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}