import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PeriodsService } from './periods.service';

export class OrdersChart {
  chartLabel: string[];
  linesData: number[][];
}

@Injectable()
export class OrdersChartService {

  private year = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
  ];

  private data = { };

  constructor(private period: PeriodsService) {
    this.data = {
      week: this.getDataForWeekPeriod(),
      month: this.getDataForMonthPeriod(),
      year: this.getDataForYearPeriod(),
    };
  }

  private getDataForWeekPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(42, this.period.getWeeks()),
      linesData: [
        [
          184, 267, 326, 366, 389, 399,
          392, 371, 340, 304, 265, 227,
          191, 158, 130, 108, 95, 91, 97,
          109, 125, 144, 166, 189, 212,
          236, 259, 280, 300, 316, 329,
          338, 342, 339, 329, 312, 288,
          258, 221, 178, 128, 71,
        ],
        [
          20, 69, 108, 137, 154, 157, 135,
          102, 76, 58, 45, 36, 29, 25, 22,
          21, 22, 38, 67, 108, 156, 208,
          262, 311, 352, 377, 385, 385, 377,
          362, 340, 313, 284, 256, 231, 213,
          205, 205, 205, 205, 205, 205,
        ],
        [
          14, 129, 222, 293, 346, 380, 396,
          397, 378, 344, 300, 250, 199, 151,
          109, 74, 48, 30, 20, 18, 24, 36,
          55, 79, 108, 141, 176, 211, 246,
          278, 306, 329, 346, 355, 358, 358,
          358, 358, 358, 358, 358, 358,
        ],
      ],
    };
  }

  private getDataForMonthPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(47, this.period.getMonths()),
      linesData: [
        [
          5, 63, 113, 156, 194, 225,
          250, 270, 283, 289, 290,
          286, 277, 264, 244, 220,
          194, 171, 157, 151, 150,
          152, 155, 160, 166, 170,
          167, 153, 135, 115, 97,
          82, 71, 64, 63, 62, 61,
          62, 65, 73, 84, 102,
          127, 159, 203, 259, 333,
        ],
        [
          6, 83, 148, 200, 240,
          265, 273, 259, 211,
          122, 55, 30, 28, 36,
          50, 68, 88, 109, 129,
          146, 158, 163, 165,
          173, 187, 208, 236,
          271, 310, 346, 375,
          393, 400, 398, 387,
          368, 341, 309, 275,
          243, 220, 206, 202,
          207, 222, 247, 286, 348,
        ],
        [
          398, 348, 315, 292, 274,
          261, 251, 243, 237, 231,
          222, 209, 192, 172, 152,
          132, 116, 102, 90, 80, 71,
          64, 58, 53, 49, 48, 54, 66,
          84, 104, 125, 142, 156, 166,
          172, 174, 172, 167, 159, 149,
          136, 121, 105, 86, 67, 45, 22,
        ],
      ],
    };
  }

  private getDataForYearPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(42, this.year),
      linesData: [
        [
          190, 269, 327, 366, 389, 398,
          396, 387, 375, 359, 343, 327,
          312, 298, 286, 276, 270, 268,
          265, 258, 247, 234, 220, 204,
          188, 172, 157, 142, 128, 116,
          106, 99, 95, 94, 92, 89, 84,
          77, 69, 60, 49, 36, 22,
        ],
        [
          265, 307, 337, 359, 375, 386,
          393, 397, 399, 397, 390, 379,
          365, 347, 326, 305, 282, 261,
          241, 223, 208, 197, 190, 187,
          185, 181, 172, 160, 145, 126,
          105, 82, 60, 40, 26, 19, 22,
          43, 82, 141, 220, 321,
        ],
        [
          9, 165, 236, 258, 244, 206,
          186, 189, 209, 239, 273, 307,
          339, 365, 385, 396, 398, 385,
          351, 300, 255, 221, 197, 181,
          170, 164, 162, 161, 159, 154,
          146, 135, 122, 108, 96, 87,
          83, 82, 82, 82, 82, 82, 82,
        ],
      ],
    };
  }

  getDataLabels(nPoints: number, labelsArray: string[]): string[] {
    const labelsArrayLength = labelsArray.length;
    const step = Math.round(nPoints / labelsArrayLength);

    return Array.from(Array(nPoints)).map((item, index) => {
      const dataIndex = Math.round(index / step);

      return index % step === 0 ? labelsArray[dataIndex] : '';
    });
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    return observableOf(this.data[period]);
  }
}
