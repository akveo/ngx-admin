import {Injectable} from 'angular2/core';

@Injectable()
export class PieChartService {

   private _data = [
    {
      color: 'rgba(255,255,255,0.4)',
      description: 'New Visits',
      stats: '57,820',
      icon: 'person',
    }, {
      color: 'rgba(255,255,255,0.4)',
      description: 'Purchases',
      stats: '$ 89,745',
      icon: 'money',
    }, {
      color: 'rgba(255,255,255,0.4)',
      description: 'Active Users',
      stats: '178,391',
      icon: 'face',
    }, {
      color: 'rgba(255,255,255,0.4)',
      description: 'Returned',
      stats: '32,592',
      icon: 'refresh',
    }
  ];

  getData() {
    return this._data;
  }
}
