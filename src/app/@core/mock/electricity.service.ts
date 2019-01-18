import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Electricity, ElectricityChart, ElectricityData } from '../data/electricity';

@Injectable()
export class ElectricityService extends ElectricityData {

  private listData: Electricity[] = [
    {
      title: '2015',
      months: [
        { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
        { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
        { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
        { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
        { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
        { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
        { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
        { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
        { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
        { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
        { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
        { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
      ],
    },
    {
      title: '2016',
      active: true,
      months: [
        { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
        { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
        { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
        { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
        { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
        { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
        { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
        { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
        { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
        { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
        { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
        { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
      ],
    },
    {
      title: '2017',
      months: [
        { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
        { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
        { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
        { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
        { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
        { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
        { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
        { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
        { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
        { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
        { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
        { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
      ],
    },
  ];

  private chartPoints = [
    490, 490, 495, 500,
    505, 510, 520, 530,
    550, 580, 630, 720,
    800, 840, 860, 870,
    870, 860, 840, 800,
    720, 200, 145, 130,
    130, 145, 200, 570,
    635, 660, 670, 670,
    660, 630, 580, 460,
    380, 350, 340, 340,
    340, 340, 340, 340,
    340, 340, 340,
  ];

  chartData: ElectricityChart[];

  constructor() {
    super();
    this.chartData = this.chartPoints.map((p, index) => ({
      label: (index % 5 === 3) ? `${Math.round(index / 5)}` : '',
      value: p,
    }));
  }

  getListData(): Observable<Electricity[]> {
    return observableOf(this.listData);
  }

  getChartData(): Observable<ElectricityChart[]> {
    return observableOf(this.chartData);
  }
}
