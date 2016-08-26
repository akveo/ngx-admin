import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => require('es6-promise-loader!app/pages/login/login.module')('default')
  },
  {
    path: 'register',
    loadChildren: () => require('es6-promise-loader!app/pages/register/register.module')('default')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => require('es6-promise-loader!app/pages/dashboard/dashboard.module')('default') },
      { path: 'editors', loadChildren: () => require('es6-promise-loader!app/pages/editors/editors.module')('default') },
      //{ path: 'components', loadChildren: () => require('es6-promise-loader!app/pages/components/components.module')('default') }
      { path: 'charts', loadChildren: () => require('es6-promise-loader!app/pages/charts/charts.module')('default') },
      { path: 'ui', loadChildren: () => require('es6-promise-loader!app/pages/ui/ui.module')('default') },
      { path: 'forms', loadChildren: () => require('es6-promise-loader!app/pages/forms/forms.module')('default') },
      { path: 'tables', loadChildren: () => require('es6-promise-loader!app/pages/tables/tables.module')('default') },
      { path: 'maps', loadChildren: () => require('es6-promise-loader!app/pages/maps/maps.module')('default') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
