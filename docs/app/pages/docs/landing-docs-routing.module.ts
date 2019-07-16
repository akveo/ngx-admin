/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingDocsComponent } from './landing-docs.component';
import { NgxAdminLandingPageComponent } from './page/ngx-admin-landing-page.component';


export const routes: Routes = [
  {
    path: '',
    component: LandingDocsComponent,
    children: [
      {
        path: ':page',
        component: NgxAdminLandingPageComponent,
      },
      {
        path: ':page/:subPage',
        component: NgxAdminLandingPageComponent,
      },
      {
        path: ':page/:subPage/:tab',
        component: NgxAdminLandingPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingDocsRoutingModule {
}
