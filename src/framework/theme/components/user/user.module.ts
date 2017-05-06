/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import {
  NgaUserComponent,
} from './user.component';

const NGA_USER_COMPONENTS = [
  NgaUserComponent,
];

@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_USER_COMPONENTS,
  ],
  exports: [
    ...NGA_USER_COMPONENTS,
  ],
})
export class NgaUserModule { }
