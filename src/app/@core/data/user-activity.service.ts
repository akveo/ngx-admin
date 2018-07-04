import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

export class UserActive {
  date: string;
  pagesVisitCount: number;
  percentageNewVisits: string;
}

@Injectable()
export class UserActivityService {

  private getRandomUpToThousand = () => Math.round(Math.random() * 1000);

  private years: string[] = [
    '2010', '2011', '2012',
    '2013', '2014', '2015',
    '2016', '2017', '2018',
  ];

  private months: string[] = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ];

  private data = {
    week: (): UserActive[] => {
      const date = new Date();
      const days = date.getDate();
      const month = this.months[date.getMonth()];

      return Array.from(Array(days)).map((_, index) => {
        return {
          date: `${index + 1} ${month}`,
          pagesVisitCount: this.getRandomUpToThousand(),
          percentageNewVisits: `${this.getRandomUpToThousand() / 10}, %`,
        };
      });

    },
    month: (): UserActive[] => {
      return this.months.map((month) => {
        return {
          date: month,
          pagesVisitCount: this.getRandomUpToThousand(),
          percentageNewVisits: `${this.getRandomUpToThousand() / 10}, %`,
        };
      });
    },
    year: (): UserActive[] => {
      return this.years.map((year) => {
        return {
          date: year,
          pagesVisitCount: this.getRandomUpToThousand(),
          percentageNewVisits: `${this.getRandomUpToThousand() / 10}, %`,
        };
      });
    },
  };

  getUserActivityData(period: string): Observable<UserActive[]> {
    return observableOf(this.data[period]());
  }
}
