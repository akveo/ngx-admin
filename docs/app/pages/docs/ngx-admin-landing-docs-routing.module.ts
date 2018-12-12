/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxAdminLandingDocsComponent } from './ngx-admin-landing-docs.component';


export const routes: Routes = [
  {
    path: '',
    component: NgxAdminLandingDocsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAdminLandingDocsRoutingModule {
}
