/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'ng2-tree';

const modules = [
  TreeModule,
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
export class NgaComponentsModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaComponentsModule,
      imports: [
        ...modules,
      ],
      exports: [
        ...modules,
      ],
    };
  }
}
