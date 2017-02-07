import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaLayoutModule } from './layout/nga-layout.module';

const NGA_THEME_SUBMODULES = [
  NgaLayoutModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...NGA_THEME_SUBMODULES,
  ],
  exports: [
    ...NGA_THEME_SUBMODULES,
  ],
})
export class NgaThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaThemeModule,
    };
  }
}
