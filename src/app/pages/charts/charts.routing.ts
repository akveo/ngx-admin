import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { ChartistJsComponent } from './components/chartist-js/chartist-js.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    children: [
      { path: 'chartist-js', component: ChartistJsComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
