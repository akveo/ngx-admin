import {Component, ViewEncapsulation} from 'angular2/core';

import {PopularApp} from './popularApp';
import {PieChart} from './pieChart';
import {BaCard} from '../../theme/components';


@Component({
  selector: 'dashboard',
  pipes: [],
  directives: [PopularApp, PieChart, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

}
