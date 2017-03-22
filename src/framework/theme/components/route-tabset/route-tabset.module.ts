/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgaRouteTabsetComponent } from './route-tabset.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NgaRouteTabsetComponent,
  ],
  exports: [
    NgaRouteTabsetComponent,
  ],
})
export class NgaRouteTabsetModule { }
