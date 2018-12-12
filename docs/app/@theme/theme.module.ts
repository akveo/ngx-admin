/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import {
  NgxFooterComponent,
  NgxHeaderComponent,
  NgxSectionTitleComponent,
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
  NbThemeModule,
  NbMenuModule,
  NbCheckboxModule,
} from '@nebular/theme';

const BASE_MODULES = [CommonModule/*, FormsModule, ReactiveFormsModule*/];

const NB_MODULES = [
  NbLayoutModule,
  NbCheckboxModule,
];

const COMPONENTS = [
  NgxFooterComponent,
  NgxHeaderComponent,
  NgxSectionTitleComponent,
];

const PIPES = [
  EvaIconsPipe,
];

@NgModule({
  imports: [
    RouterModule,

    ...BASE_MODULES,

    NbMenuModule,
    NbCheckboxModule,

    ...NB_MODULES,
  ],
  declarations: [
    ...COMPONENTS,

    ...PIPES,
  ],
  exports: [
    RouterModule,

    ...BASE_MODULES,

    ...NB_MODULES,

    NgxFooterComponent,
    NgxHeaderComponent,
    NgxSectionTitleComponent,

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
