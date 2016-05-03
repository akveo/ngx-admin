import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {ChartJs} from "./components/chartJs";
import {ChartistJs} from "./components/chartistJs/chartistJs.component";

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
    useAsDefault: true,
  },
  {
    name: 'ChartistJs',
    component: ChartistJs,
    path: '/chartist-js',
  }
])
export class Charts {

  constructor() {
  }

  ngOnInit() {
  }

}
