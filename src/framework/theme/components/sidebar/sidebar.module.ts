/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgaSidebarComponent,
  NgaSidebarContentComponent,
  NgaSidebarFooterComponent,
  NgaSidebarHeaderComponent,
} from './sidebar.component';

const NGA_SIDEBAR_COMPONENTS = [
  NgaSidebarComponent,
  NgaSidebarContentComponent,
  NgaSidebarFooterComponent,
  NgaSidebarHeaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...NGA_SIDEBAR_COMPONENTS,
  ],
  exports: [
    ...NGA_SIDEBAR_COMPONENTS,
  ],
})
export class NgaSidebarModule {
}
