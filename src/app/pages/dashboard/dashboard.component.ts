import {Component, ViewEncapsulation} from 'angular2/core';

import {PopularApp} from './popularApp';

@Component({
  selector: 'dashboard',
  pipes: [],
  directives: [PopularApp],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

}
