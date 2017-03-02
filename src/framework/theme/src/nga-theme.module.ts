import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgaThemeOptions } from './nga-theme.options';

import { NgaLayoutModule } from './layout/nga-layout.module';

const NGA_THEME_SUBMODULES = [
  NgaLayoutModule,
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    ...NGA_THEME_SUBMODULES,
  ],
  exports: [
    ...NGA_THEME_SUBMODULES,
  ],
})
export class NgaThemeModule {
  static forRoot(ngaThemeOptions?: NgaThemeOptions): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaThemeModule,
    };
  }
}
