import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { TreeComponent } from './tree/tree.component';
import { ToasterComponent } from './toaster/toaster.component';

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [
  {
    path: 'tree',
    component: TreeComponent,
  }, {
    path: 'toaster',
    component: ToasterComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }

export const routedComponents = [
  ComponentsComponent,
  TreeComponent,
  ToasterComponent,
];
