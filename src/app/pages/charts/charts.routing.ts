import { Routes, RouterModule }  from '@angular/router';

import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      { path: 'chartist-js', component: ChartistJs }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
