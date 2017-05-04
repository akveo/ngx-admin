/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
  ],
  exports: [
    NgbModule,
  ],
})
export class NgaBootstrapModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaBootstrapModule,
      imports: [
        NgbModule.forRoot(),
      ],
      exports: [
        NgbModule,
      ],
    };
  }
}
