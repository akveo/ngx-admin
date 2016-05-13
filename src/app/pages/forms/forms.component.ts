import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Inputs} from './components/inputs';
import {Layouts} from './components/layouts';

@Component({
  selector: 'forms',
  pipes: [],
  providers: [],
  styles: [],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    name: 'Inputs',
    component: Inputs,
    path: '/inputs',
    useAsDefault: true
  },
  {
    name: 'Layouts',
    component: Layouts,
    path: '/layouts',
  }
])
export class Forms {

  constructor() {
  }
}
