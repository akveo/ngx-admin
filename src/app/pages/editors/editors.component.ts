import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Ckeditor} from "./components/ckeditor";

@Component({
  selector: 'editors',
  template: `<router-outlet></router-outlet>`
})

@RouteConfig([
  {
    name: 'Ckeditor',
    component: Ckeditor,
    path: '/ckeditor',
    useAsDefault: true
  }
])
export class Editors {
  constructor() {
  }
}
