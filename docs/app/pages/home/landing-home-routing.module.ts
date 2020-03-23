/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingHomeComponent } from './landing-home.component';
import { MaterialLandingComponent } from './material-landing/material-landing.component';


export const routes: Routes = [
  {
    path: '',
    component: LandingHomeComponent,
  },
  {
    path: 'material',
    component: MaterialLandingComponent,
  },
  // {
  //   path: 'overview',
  //   component: OverviewComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingHomeRoutingModule {
}
