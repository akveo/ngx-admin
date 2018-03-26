import { NgModule, ModuleWithProviders } from '@angular/core';
import { MapsAPILoader } from './maps-api-loader';
import { AgmComponent } from './agm.component';
import { AgmMarkerComponent } from './agm-marker.component';

@NgModule({
  declarations: [ AgmComponent, AgmMarkerComponent ],
  exports: [ AgmComponent, AgmMarkerComponent ],
})
export class AgmCoreModule {
  static forRoot() {
    return <ModuleWithProviders>{
      ngModule: AgmCoreModule,
      providers: [ MapsAPILoader ],
    };
  }
}

export { MapsAPILoader } from './maps-api-loader';
