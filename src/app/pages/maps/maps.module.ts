import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './maps.routing';
import { Maps } from './maps.component';
import { BubbleMaps } from './components/bubbleMaps/bubbleMaps.component';
import { GoogleMaps } from './components/googleMaps/googleMaps.component';
import { LeafletMaps } from './components/leafletMaps/leafletMaps.component';
import { LineMaps } from './components/lineMaps/lineMaps.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Maps,
    BubbleMaps,
    GoogleMaps,
    LeafletMaps,
    LineMaps
  ]
})
export default class MapsModule {}
