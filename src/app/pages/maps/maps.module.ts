import { CommonModule }  from '@angular/common';
import { NgModule } from '@angular/core';

import { NgaModule } from '../../theme/nga.module';

import { routing } from './maps.routing';
import { MapsComponent } from './maps.component';

import { BubbleMapsComponent } from './components/bubble-maps/bubble-maps.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { LeafletMapsComponent } from './components/leaflet-maps/leaflet-maps.component';
import { LineMapsComponent } from './components/line-maps/line-maps.component';
import { BubbleMapsService } from './components/bubble-maps/bubble-maps.service';
import { LineMapsService } from './components/line-maps/line-maps.service';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    MapsComponent,
    BubbleMapsComponent,
    GoogleMapsComponent,
    LeafletMapsComponent,
    LineMapsComponent
  ],
  providers: [
    BubbleMapsService,
    LineMapsService
  ]
})
export class MapsModule { }
