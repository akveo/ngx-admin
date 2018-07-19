import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

export class LiveUpdateChart {
  liveChart: number[];
  delta: {
    up: boolean;
    value: number;
  };
  dailyIncome: number;
}

export class PieChart {
  value: number;
  name: string;
}

@Injectable()
export class EarningService {

  private getRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 1000);
    });
  }

  private pieChartData = [
    {
      value: 50,
      name: 'Bitcoin',
    },
    {
      value: 25,
      name: 'Tether',
    },
    {
      value: 25,
      name: 'Ethereum',
    },
  ];

  private liveUpdateChartData = {
    bitcoin: {
      liveChart: [],
      delta: {
        up: true,
        value: 4
      },
      dailyIncome: 45895,
    },
    tether: {
      liveChart: [],
      delta: {
        up: false,
        value: 9,
      },
      dailyIncome: 5862,
    },
    ethereum: {
      liveChart: [],
      delta: {
        up: false,
        value: 21,
      },
      dailyIncome: 584,
    },
  };

  generateRandomEarningLiveUpdateChartData(currency) {
    let data = this.liveUpdateChartData[currency.toLowerCase()];

    data.liveChart = this.getRandomData(12);

    return data;
  }

  getEarningLiveUpdateChartData(currency: string): Observable<LiveUpdateChart> {
    return observableOf(this.generateRandomEarningLiveUpdateChartData(currency));
  }

  getEarningPieChartData(): Observable<PieChart[]> {
    return observableOf(this.pieChartData);
  }
}
