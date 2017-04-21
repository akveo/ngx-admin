import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaThemeOptions, ngaThemeOptionsToken } from './theme.options';
import { NgaThemeService } from './services/theme.service';


@NgModule({
  imports: [
    CommonModule,
  ],
})
export class NgaThemeModule {
  // TODO: check the options (throw exception?)
  static forRoot(ngaThemeOptions: NgaThemeOptions): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaThemeModule,
      providers: [
        { provide: ngaThemeOptionsToken, useValue: ngaThemeOptions || {} },
        NgaThemeService,
      ],
    };
  }
}
