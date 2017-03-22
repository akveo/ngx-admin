/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgaCardComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
  NgaCardHeaderComponent,
} from './card.component';

const NGA_CARD_COMPONENTS = [
  NgaCardComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
  NgaCardHeaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...NGA_CARD_COMPONENTS,
  ],
  exports: [
    ...NGA_CARD_COMPONENTS,
  ],
})
export class NgaCardModule { }
