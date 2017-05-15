/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEchartsModule } from 'angular2-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    AngularEchartsModule,
    NgxChartsModule,
  ],
  exports: [
    AngularEchartsModule,
    NgxChartsModule,
  ],
})
export class NgaChartsModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaChartsModule,
      imports: [
        AngularEchartsModule,
        NgxChartsModule,
      ],
      exports: [
        AngularEchartsModule,
        NgxChartsModule,
      ],
    };
  }
}
