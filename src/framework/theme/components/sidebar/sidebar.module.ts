/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import {
  NgaSidebarComponent,
  NgaSidebarFooterComponent,
  NgaSidebarHeaderComponent,
} from './sidebar.component';

import { NgaSidebarService } from './sidebar.service';

const NGA_SIDEBAR_COMPONENTS = [
  NgaSidebarComponent,
  NgaSidebarFooterComponent,
  NgaSidebarHeaderComponent,
];

const NGA_SIDEBAR_PROVIDERS = [
  NgaSidebarService,
];

@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...NGA_SIDEBAR_COMPONENTS,
  ],
  exports: [
    ...NGA_SIDEBAR_COMPONENTS,
  ],
})
export class NgaSidebarModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaSidebarModule,
      providers: [
        ...NGA_SIDEBAR_PROVIDERS,
      ],
    };
  }
}
