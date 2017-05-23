/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const modules = [
  Ng2SmartTableModule,
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
export class NgaTablesModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaTablesModule,
      imports: [
        ...modules,
      ],
      exports: [
        ...modules,
      ],
    };
  }
}
