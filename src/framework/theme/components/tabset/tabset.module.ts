/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgaTabsetComponent, NgaTabComponent } from './tabset.component';

const NGA_TABSET_COMPONENTS = [
  NgaTabsetComponent,
  NgaTabComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...NGA_TABSET_COMPONENTS,
  ],
  exports: [
    ...NGA_TABSET_COMPONENTS,
  ],
})
export class NgaTabsetModule { }
