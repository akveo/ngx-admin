/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import {
  NgaLayoutComponent,
  NgaLayoutColumnComponent,
  NgaLayoutFooterComponent,
  NgaLayoutHeaderComponent,
} from './layout.component';

const NGA_LAYOUT_COMPONENTS = [
  NgaLayoutComponent,
  NgaLayoutColumnComponent,
  NgaLayoutFooterComponent,
  NgaLayoutHeaderComponent,
];

@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_LAYOUT_COMPONENTS,
  ],
  exports: [
    ...NGA_LAYOUT_COMPONENTS,
  ],
})
export class NgaLayoutModule { }
