import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
/*import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';*/

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      loadChildren: './home/ngx-admin-landing-home.module#NgxAdminLandingHomeModule',
    },
/*    {
      path: 'docs',
      loadChildren: './docs/ngx-admin-landing-docs.module#NgxAdminLandingDocsModule',
    },*/
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
/*    {
      path: '**',
      component: NotFoundComponent,
    }*/
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
