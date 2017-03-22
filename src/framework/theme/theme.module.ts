import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgaThemeOptions } from './theme.options';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
  ],
})
export class NgaThemeModule {
  static forRoot(ngaThemeOptions?: NgaThemeOptions): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaThemeModule,
    };
  }
}
