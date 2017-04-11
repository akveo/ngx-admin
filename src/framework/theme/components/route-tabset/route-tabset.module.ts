/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaRouteTabsetComponent } from './route-tabset.component';

@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    NgaRouteTabsetComponent,
  ],
  exports: [
    NgaRouteTabsetComponent,
  ],
})
export class NgaRouteTabsetModule { }
