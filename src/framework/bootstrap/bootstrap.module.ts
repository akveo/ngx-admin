import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    NgbModule,
  ],
})
export class NgaBootstrapModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
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
