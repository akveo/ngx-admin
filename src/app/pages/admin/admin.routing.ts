import { Routes, RouterModule }  from '@angular/router';

import { Admin } from './admin.component';
import { Territories } from './components/territories';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      { path: 'territories', component: Territories }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
