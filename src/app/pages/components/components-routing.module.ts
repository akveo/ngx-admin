import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [{
    path: 'tree',
    component: TreeComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }

export const routedComponents = [
  ComponentsComponent,
  TreeComponent,
];
