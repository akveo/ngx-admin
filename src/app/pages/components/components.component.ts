import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';
import {TreeView} from "./components/treeView";

@Component({
  selector: 'components',
  pipes: [],
  providers: [],
  styles: [],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    name: 'TreeView',
    component: TreeView,
    path: '/tree-view',
    useAsDefault: true
  }
])
export class Components {

  constructor() {
  }

}
