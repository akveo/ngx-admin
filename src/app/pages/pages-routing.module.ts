import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'identity',
      loadChildren: () => import('./identity/identity.module')
        .then(m => m.IdentityModule),
    },
    {
      path: 'countries',
      loadChildren: () => import('./countries/countries.module')
        .then(m => m.CountriesModule),
    },
    {
      path: 'account',
      loadChildren: () => import('./account/account.module')
        .then(m => m.AccountModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}