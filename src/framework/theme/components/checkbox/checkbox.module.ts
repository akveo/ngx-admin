/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';
import { NgaCheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [NgaCheckboxComponent],
  exports: [NgaCheckboxComponent],
})
export class NgaCheckboxModule { }
