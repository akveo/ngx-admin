import { Routes, RouterModule }  from '@angular/router';

import { Login } from './login.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Login
  }
];

export const routing = RouterModule.forChild(routes);
