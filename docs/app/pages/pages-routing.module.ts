import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      loadChildren: './home/landing-home.module#LandingHomeModule',
    },
    {
      path: 'docs',
      loadChildren: './docs/landing-docs.module#LandingDocsModule',
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
