import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {BasicTables} from './components/basicTables';

@Component({
  selector: 'forms',
  pipes: [],
  providers: [],
  styles: [],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    name: 'BasicTables',
    component: BasicTables,
    path: '/basic',
    useAsDefault: true
  }
])
export class Tables {

  constructor() {
  }
}
