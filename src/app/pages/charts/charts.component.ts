import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {ChartJs} from "./components/chartJs";

@Component({
  selector: 'maps',
  pipes: [],
  providers: [],
  styles: [],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    name: 'ChartJs',
    component: ChartJs,
    path: '/chart-js',
    useAsDefault: true
  }
])
export class Charts {

  constructor() {
  }

  ngOnInit() {
  }

}
