import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./home/landing-home.module')
        .then(m => m.LandingHomeModule),
    },
    {
      path: 'docs',
      loadChildren: () => import('./docs/landing-docs.module')
        .then(m => m.LandingDocsModule),
    },
    {
      path: '**',
      redirectTo: '',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
