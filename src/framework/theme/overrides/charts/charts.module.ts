/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEchartsModule } from 'angular2-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts/ng2-charts';

const modules = [
  AngularEchartsModule,
  NgxChartsModule,
  ChartsModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ],
})
export class NgaChartsModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaChartsModule,
      imports: [
        ...modules,
      ],
      exports: [
        ...modules,
      ],
    };
  }
}
