import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PeriodsService } from './periods.service';

export class UserActive {
  date: string;
  pagesVisitCount: number;
  deltaUp: boolean;
  newVisits: number;
}

@Injectable()
export class UserActivityService {

  private getRandom = (roundTo: number) => Math.round(Math.random() * roundTo);

  data = {};

  constructor(private periods: PeriodsService) {
    this.data = {
      week: this.getDataWeek(),
      month: this.getDataMonth(),
      year: this.getDataYear(),
    };
  }

  private getDataWeek(): UserActive[] {
    return this.periods.getWeeks().map((week) => {
      return {
        date: week,
        pagesVisitCount: this.getRandom(1000),
        deltaUp: this.getRandom(1) % 2 === 0,
        newVisits: this.getRandom(100),
      };
    });
  }

  private getDataMonth(): UserActive[] {
    const date = new Date();
    const days = date.getDate();
    const month = this.periods.getMonths()[date.getMonth()];

    return Array.from(Array(days)).map((_, index) => {
      return {
        date: `${index + 1} ${month}`,
        pagesVisitCount: this.getRandom(1000),
        deltaUp: this.getRandom(1) % 2 === 0,
        newVisits: this.getRandom(100),
      };
    });
  }

  private getDataYear(): UserActive[] {
    return this.periods.getYears().map((year) => {
      return {
        date: year,
        pagesVisitCount: this.getRandom(1000),
        deltaUp: this.getRandom(1) % 2 === 0,
        newVisits: this.getRandom(100),
      };
    });
  }

  getUserActivityData(period: string): Observable<UserActive[]> {
    return observableOf(this.data[period]);
  }
}
