import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

export class LiveUpdateChart {
  liveChart: any[];
  delta: {
    up: boolean;
    value: number;
  };
  dailyIncome: number;

  constructor() {
    this.liveChart = [];
    this.delta = {up: true, value: 0};
    this.dailyIncome = 0;
  }
}

export class PieChart {
  value: number;
  name: string;
}

@Injectable()
export class EarningService {

  private currentDate: Date = new Date();
  private currentValue = Math.random() * 1000;
  private ONE_DAY = 24 * 3600 * 1000;

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
        value: 4,
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
    const data = this.liveUpdateChartData[currency.toLowerCase()];

    if (data.liveChart.length > 0) {
      const newValue = this.generateRandomData();

      data.liveChart.shift();
      data.liveChart.push(newValue);

      data.liveChart = [...data.liveChart];
    } else {
      data.liveChart = Array.from(Array(500))
        .map(item => this.generateRandomData());
    }

    return data;
  }

  generateRandomData() {
    this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
    this.currentValue = this.currentValue + Math.random() * 21 - 10;

    return {
      value: [
        [this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()].join('/'),
        Math.round(this.currentValue),
      ],
    }
  }

  getEarningLiveUpdateChartData(currency: string) {
    return observableOf(this.generateRandomEarningLiveUpdateChartData(currency));
  }

  getEarningPieChartData(): Observable<PieChart[]> {
    return observableOf(this.pieChartData);
  }
}
