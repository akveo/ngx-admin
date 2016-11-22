import {Injectable} from '@angular/core';

@Injectable()
export class D3JsService {

  private _data = {
    simpleBar: {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      values: [0.01492, 0.02782, 0.08167, 0.04253],
      yAxisLabel: 'Frequency',
      yAxisFormat: '%',
      color: ['#8bd22f']
    },
    groupedBar: {
      labels: ['TX', 'CA', 'NY'],
      legend: ['Under 5 years', '14 to 17 Years', 'Over 18 Years'],
      values: [
        [2704659, 4499890, 2159981],
        [3853788, 1060451, 8819342],
        [2027307, 3277946, 1420518]
      ],
      yAxisLabel: 'Population',
      yAxisFormat: '.2s',
      color: ["#E24C68", "#3FDAF1", "#E6BA08"]
    }
  };

  public getAll() {
    return this._data;
  }
}