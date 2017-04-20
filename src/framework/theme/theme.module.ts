import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaThemeOptions } from './theme.options';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class NgaThemeModule {
  static forRoot(config?: NgaThemeOptions): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaThemeModule,
      providers: [
        {
          provide: NgaThemeOptions,
          useValue: config,
        },
      ],
    };
  }
}
