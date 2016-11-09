import { Routes, RouterModule }  from '@angular/router';

import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { D3Js } from './components/D3Js/D3Js.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      { path: 'chartist-js', component: ChartistJs },
      { path: 'd3-js', component: D3Js }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
