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
  static forRoot(ngaThemeOptions?: NgaThemeOptions): ModuleWithProviders {

    if (!ngaThemeOptions.name) {
      throw new TypeError(`Please specify the default theme name "NgaThemeModule.forRoot({name: 'default'}); 
        white registering the module."`);
    }

    return <ModuleWithProviders> {
      ngModule: NgaThemeModule,
      providers: [
        { provide: ngaThemeOptionsToken, useValue: ngaThemeOptions || {} },
        NgaThemeService,
      ],
    };
  }
}
