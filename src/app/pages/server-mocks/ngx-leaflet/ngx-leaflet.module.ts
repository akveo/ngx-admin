import { NgModule, ModuleWithProviders } from '@angular/core';
import { LeafletDirective } from './leaflet.directive';

@NgModule({
  declarations: [ LeafletDirective ],
  exports: [ LeafletDirective ],
})
export class LeafletModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: LeafletModule,
      providers: [],
    };
  }
}
