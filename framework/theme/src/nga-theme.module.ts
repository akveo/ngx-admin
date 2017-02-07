import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaLayoutModule } from './layout/nga-layout.module';

@NgModule({
  imports: [
    CommonModule,
    NgaLayoutModule,
  ],
})
export class NgaThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaThemeModule,
    };
  }
}
