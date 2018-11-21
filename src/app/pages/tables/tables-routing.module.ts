import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import {WithOptionsComponent} from "./with-options/with-options.component";

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
    path: 'smart-table',
    component: SmartTableComponent,
  },{
    path: 'with-options',
    component: WithOptionsComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
];
