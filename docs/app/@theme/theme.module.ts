/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import {
  NgxFooterComponent,
  NgxHeaderComponent,
} from './components';
// components

// services
import { ngxLandingServices } from './services';
// services

// pipes
import { EvaIconsPipe } from './pipes/eva-icons.pipe';
// pipes

import {
  NbLayoutModule,
  NbCardModule,
  NbThemeModule,
  NbMenuModule,
} from '@nebular/theme';

const NB_MODULES = [
  NbLayoutModule,
  NbCardModule,
  NbMenuModule,
];

const COMPONENTS = [
  NgxFooterComponent,
  NgxHeaderComponent,
];

const PIPES = [
  EvaIconsPipe,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,

    ...NB_MODULES,
  ],
  declarations: [
    ...COMPONENTS,

    ...PIPES,
  ],
  exports: [
    RouterModule,
    CommonModule,

    ...NB_MODULES,

    NgxFooterComponent,
    NgxHeaderComponent,

    ...PIPES,
  ],
  entryComponents: [
  ],
})
export class NgxLandingThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgxLandingThemeModule,
      providers: [
        ...NbThemeModule.forRoot({ name: 'ngx-landing' }).providers,
        ...NbMenuModule.forRoot().providers,

        ...ngxLandingServices,
      ],
    };
  }
}
