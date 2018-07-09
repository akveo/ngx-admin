import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

export class ProfitChart {
  chartLabel: string[];
  data: number[][];
}

@Injectable()
export class ProfitChartService {

  private month = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ];

  private week = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  private year = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
  ];

  private data = {
    week: this.getDataForWeekPeriod(),
    month: this.getDataForMonthPeriod(),
    year: this.getDataForYearPeriod(),
  };

  private getDataForWeekPeriod(): ProfitChart {
    const nPoint = this.week.length;

    return {
      chartLabel: this.week,
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getDataForMonthPeriod(): ProfitChart {
    const nPoint = this.month.length;

    return {
      chartLabel: this.month,
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getDataForYearPeriod(): ProfitChart {
    const nPoint = this.year.length;

    return {
      chartLabel: this.year,
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 500);
    });
  }

  getProfitChartData(period: string): Observable<ProfitChart> {
    return observableOf(this.data[period]);
  }
}
