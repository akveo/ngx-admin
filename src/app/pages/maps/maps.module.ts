import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';

import { SharedModule } from '../../shared.module';

import { MapsRoutingModule, routedComponents } from './maps-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule.forRoot(),
    LeafletModule.forRoot(),
    MapsRoutingModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class MapsModule { }
