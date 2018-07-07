import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

export class OrdersChart {
  chartLabel: string[];
  firstLineData: number[];
  secondLineData: number[];
  thirdLineData: number[];
}

@Injectable()
export class OrdersChartService {

  private month = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ];

  private week = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];

  private year = [
    '2010',
    '2011',
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

  private getDataForWeekPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(this.week),
      firstLineData: [
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
      secondLineData: [
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
      thirdLineData: [
        398, 348, 315, 292, 274,
        261, 251, 243, 237, 231,
        222, 209, 192, 172, 152,
        132, 116, 102, 90, 80, 71,
        64, 58, 53, 49, 48, 54, 66,
        84, 104, 125, 142, 156, 166,
        172, 174, 172, 167, 159, 149,
        136, 121, 105, 86, 67, 45, 22,
      ],
    };
  }

  private getDataForMonthPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(this.month),
      firstLineData: [
        55, 63, 74, 88, 107, 105, 97,
        93, 85, 72, 50, 24, 20, 43, 89,
        166, 205, 205, 182, 154, 112,
        75, 48, 45, 68, 96, 119, 115,
        95, 77, 60, 47, 44, 42, 53, 62,
        77, 86, 93, 102, 123, 140,
        147, 150, 158, 161, 160,
      ],
      secondLineData: [
        104, 82, 67, 52, 41, 32, 50, 77,
        113, 156, 189, 221, 228, 222,
        197, 162, 143, 115, 102, 92,
        78, 73, 75, 66, 57, 56, 55,
        54, 61, 67, 77, 89, 105, 131,
        160, 164, 158, 154, 152, 146,
        145, 146, 148, 144, 140, 136, 133,
      ],
      thirdLineData: [
        206, 180, 159, 142, 130, 139,
        166, 176, 184, 186, 186, 188,
        175, 167, 160, 153, 145, 152,
        163, 184, 207, 230, 240, 238,
        228, 213, 191, 168, 149, 118,
        89, 70, 63, 70, 88, 107, 117,
        127, 129, 140, 162, 176, 187,
        188, 168, 188, 219, 224,
      ],
    };
  }

  private getDataForYearPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(this.year),
      firstLineData: [
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
      secondLineData: [
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
      thirdLineData: [
        398, 348, 315, 292, 274,
        261, 251, 243, 237, 231,
        222, 209, 192, 172, 152,
        132, 116, 102, 90, 80, 71,
        64, 58, 53, 49, 48, 54, 66,
        84, 104, 125, 142, 156, 166,
        172, 174, 172, 167, 159, 149,
        136, 121, 105, 86, 67, 45, 22,
      ],
    };
  }

  getDataLabels(labelsArray: string[]): string[] {
    const nPoints = 47;
    const labelsArrayLength = labelsArray.length;

    return Array.from(Array(nPoints)).map((item, index) => {
      const dataIndex = Math.round(
        index
        / Math.round(nPoints / labelsArrayLength));

      return index % 4 === 0 ? labelsArray[dataIndex] : '';
    });
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    return observableOf(this.data[period]);
  }
}
