import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

// import {ChartJs} from "./components/chartJs";
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
    name: 'ChartistJs',
    component: ChartistJs,
    path: '/chartist-js',
    useAsDefault: true,
  },
  // {
  //   name: 'ChartJs',
  //   component: ChartJs,
  //   path: '/chart-js',
  // },
])
export class Charts {

  constructor() {
  }

  ngOnInit() {
  }

}
