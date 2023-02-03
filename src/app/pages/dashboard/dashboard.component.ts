import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
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

  solarValue: number;
  apiserip: CardSettings = {
    title: 'SERP API',
    iconClass: 'nb-play',
    type: 'success',
  };
  apicrawler: CardSettings = {
    title: 'Crawler API',
    iconClass: 'nb-play',
    type: 'success',
  };
  imagescoring: CardSettings = {
    title: 'Image Analysis',
    iconClass: 'nb-play',
    type: 'success',
  };
  keywordscoring: CardSettings = {
    title: 'Keywords Analysis',
    iconClass: 'nb-play',
    type: 'success',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.apiserip,
    this.apicrawler,
    this.imagescoring,
    this.keywordscoring,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.apiserip,
        type: 'primary',
      },
      {
        ...this.apicrawler,
        type: 'primary',
      },
      {
        ...this.imagescoring,
        type: 'primary',
      },
      {
        ...this.keywordscoring,
        type: 'primary',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
