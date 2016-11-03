import { Routes, RouterModule }  from '@angular/router';

import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import {MorrisComponent} from "./components/morrisJs/morris.componenet";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      { path: 'chartist-js', component: ChartistJs },
      { path: 'morris', component: MorrisComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);
