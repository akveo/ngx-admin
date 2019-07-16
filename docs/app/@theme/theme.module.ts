/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// components
import {
  NgxLandingFooterComponent,
  NgxSectionTitleComponent,
  NgxFragmentTargetDirective,
  NgxPageTocComponent,
  NgxPageTabsComponent,
  NgxLandingHeaderComponent,
  NgxDocsFooterComponent,
} from './components';
// components

// services
import { ngxLandingServices } from './services';
// services

// pipes
import { EvaIconsPipe } from './pipes/eva-icons.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
// pipes

import {
  NbLayoutModule,
  NbThemeModule,
  NbMenuModule,
  NbCheckboxModule,
  NbCardModule,
  NbSidebarModule,
  NbTabsetModule,
} from '@nebular/theme';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  LazyLoadImageModule,
];

const NB_MODULES = [
  NbLayoutModule,
  NbCheckboxModule,
  NbMenuModule,
  NbCardModule,
  NbSidebarModule,
  NbTabsetModule,
];

const COMPONENTS = [
  NgxLandingFooterComponent,
  NgxSectionTitleComponent,
  NgxFragmentTargetDirective,
  NgxPageTocComponent,
  NgxPageTabsComponent,
  NgxLandingHeaderComponent,
  NgxDocsFooterComponent,
];

const PIPES = [
  EvaIconsPipe,
  CapitalizePipe,
];

@NgModule({
  imports: [
    RouterModule,

    ...BASE_MODULES,

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

    ...COMPONENTS,

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
        ...NbSidebarModule.forRoot().providers,

        ...ngxLandingServices,
      ],
    };
  }
}
