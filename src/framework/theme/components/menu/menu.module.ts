/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaMenuComponent, NgaMenuItemComponent } from './menu.component';

const NGA_MENU_COMPONENTS = [
  NgaMenuComponent,
  NgaMenuItemComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...NGA_MENU_COMPONENTS,
  ],
  exports: [
    ...NGA_MENU_COMPONENTS,
  ],
})
export class NgaMenuModule { }
