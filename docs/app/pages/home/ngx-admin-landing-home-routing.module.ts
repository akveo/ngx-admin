/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxAdminLandingHomeComponent } from './ngx-admin-landing-home.component';


export const routes: Routes = [
  {
    path: '',
    component: NgxAdminLandingHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAdminLandingHomeRoutingModule {
}
