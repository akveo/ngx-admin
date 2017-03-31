import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaThemeOptions } from './theme.options';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class NgaThemeModule {
  static forRoot(ngaThemeOptions?: NgaThemeOptions): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaThemeModule,
    };
  }
}
