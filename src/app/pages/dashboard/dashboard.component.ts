import {Component, ViewEncapsulation} from 'angular2/core';

import {PopularApp} from './popularApp';
import {BaPanel} from '../../theme';


@Component({
  selector: 'dashboard',
  pipes: [],
  directives: [PopularApp, BaPanel],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

}
