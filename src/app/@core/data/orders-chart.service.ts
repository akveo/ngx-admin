import { Injectable } from '@angular/core';
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
          5, 54, 96, 134, 168, 198, 224,
          245, 263, 276, 285, 290, 290,
          287, 282, 273, 260, 244, 223,
          202, 182, 166, 156, 151, 150,
          151, 153, 156, 161, 166, 169,
          169, 162, 149, 134, 118, 102,
          88, 77, 69, 64, 63,
        ],
        [
          6, 73, 130, 178, 217, 247, 266,
          273, 264, 233, 170, 94, 48, 29,
          27, 33, 43, 57, 74, 91, 109,
          126, 141, 153, 161, 163, 166,
          172, 183, 199, 220, 247, 278,
          310, 342, 368, 386, 397, 400,
          397, 388, 373,
        ],
        [
          398, 355, 324, 302, 285, 271,
          261, 252, 245, 239, 235, 229,
          221, 210, 197, 181, 164, 147,
          131, 117, 104, 94, 85, 77, 70,
          64, 59, 54, 50, 48, 48, 54,
          64, 78, 95, 112, 129, 143, 155,
          164, 170, 173,
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
          398, 355, 324, 302, 285, 271,
          261, 252, 245, 239, 235, 229,
          221, 210, 197, 181, 164, 147,
          131, 117, 104, 94, 85, 77, 70,
          64, 59, 54, 50, 48, 48, 54,
          64, 78, 95, 112, 129, 143, 155,
          164, 170, 173,
        ],
        [
          6, 73, 130, 178, 217, 247, 266,
          273, 264, 233, 170, 94, 48, 29,
          27, 33, 43, 57, 74, 91, 109,
          126, 141, 153, 161, 163, 166,
          172, 183, 199, 220, 247, 278,
          310, 342, 368, 386, 397, 400,
          397, 388, 373,
        ],
        [
          5, 54, 96, 134, 168, 198, 224,
          245, 263, 276, 285, 290, 290,
          287, 282, 273, 260, 244, 223,
          202, 182, 166, 156, 151, 150,
          151, 153, 156, 161, 166, 169,
          169, 162, 149, 134, 118, 102,
          88, 77, 69, 64, 63,
        ],
      ],
    };
  }

  getDataLabels(nPoints: number, labelsArray: string[]): string[] {
    const labelsArrayLength = labelsArray.length;
    const step = Math.round(nPoints / labelsArrayLength);

    return Array.from(Array(nPoints)).map((item, index) => {
      const dataIndex = Math.round(
        index
        / step);

      return index % step === 0 ? labelsArray[dataIndex] : '';
    });
  }

  getOrdersChartData(period: string): OrdersChart {
    return this.data[period];
  }
}
