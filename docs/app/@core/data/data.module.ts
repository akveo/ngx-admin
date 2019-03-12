/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuService } from './service/header-menu.service';
import { ReviewsService } from './service/reviews.service';
import { DescriptionsService } from './service/descriptions.service';
import { BundlesService } from './service/bundles.service';

const SERVICES = [
  HeaderMenuService,
  ReviewsService,
  DescriptionsService,
  BundlesService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
