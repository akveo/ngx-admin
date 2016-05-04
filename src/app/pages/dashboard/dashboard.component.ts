import {Component, ViewEncapsulation} from 'angular2/core';

import {PopularApp} from './popularApp';
import {PieChart} from './pieChart';
import {TrafficChart} from './trafficChart';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'dashboard',
  pipes: [],
  directives: [PopularApp, PieChart, TrafficChart, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

}
