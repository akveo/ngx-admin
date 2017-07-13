import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
