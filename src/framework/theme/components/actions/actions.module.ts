/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaActionComponent, NgaActionsComponent } from './actions.component';

const NGA_ACTIONS_COMPONENTS = [
  NgaActionComponent,
  NgaActionsComponent,
];

@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_ACTIONS_COMPONENTS,
  ],
  exports: [
    ...NGA_ACTIONS_COMPONENTS,
  ],
})
export class NgaActionsModule { }
