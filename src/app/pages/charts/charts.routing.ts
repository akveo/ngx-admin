import { Routes, RouterModule }  from '@angular/router';

import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { NgxCharts } from './components/ngxCharts/ngxCharts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      { path: 'chartist-js', component: ChartistJs },
      { path: 'ngx-charts', component: NgxCharts }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
