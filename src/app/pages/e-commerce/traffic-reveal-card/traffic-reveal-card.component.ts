import { Component, OnDestroy } from '@angular/core';
import { TrafficList, TrafficListService } from '../../../@core/data/traffic-list.service';
import { takeWhile } from 'rxjs/operators';

// TODO: move to service
class FrontCardData {
  data: number[];
  labels: string[];
  formatter: string;
}

@Component({
  selector: 'ngx-traffic-reveal-card',
  styleUrls: ['./traffic-reveal-card.component.scss'],
  templateUrl: './traffic-reveal-card.component.html',
})
export class TrafficRevealCardComponent implements OnDestroy {

  private alive = true;

  // TODO: move to service
  private trafficFrontCardDataSet = {
    week: {
      data: [10, 15, 19, 7, 20, 13, 15],
      labels: [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
      ],
      formatter: '{c0} MB',
    },
    month: {
      data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      formatter: '{c0} GB',
    },
    year: {
      data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
      labels: [
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
      ],
      formatter: '{c0} GB',
    },
  };


  frontCardData: FrontCardData;
  trafficListData: TrafficList;
  revealed = false;
  period: string = 'week';

  constructor(private trafficListService: TrafficListService) {
    this.getTrafficFrontCardData(this.period);
    this.getTrafficBackCardData(this.period);
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriod(value: string): void {
    this.getTrafficFrontCardData(value);
    this.getTrafficBackCardData(value);
  }

  getTrafficFrontCardData(period: string) {
    this.frontCardData = this.trafficFrontCardDataSet[period];
  }

  getTrafficBackCardData(period: string) {
    this.trafficListService.getTrafficListData(period)
      .pipe(takeWhile(() => this.alive ))
      .subscribe(trafficListData => {
        this.trafficListData = trafficListData;
      })
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
