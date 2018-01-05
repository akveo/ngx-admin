import {NgModule} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {LeafletModule} from '@asymmetrik/angular2-leaflet';
import {AngularEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {MapsRoutingModule, routedComponents} from './maps-routing.module';
import {CalcService} from "./search-map/calc.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ["places"]
    }),
    LeafletModule.forRoot(),
    MapsRoutingModule,
    AngularEchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations:
    [
      ...routedComponents,
    ],
  providers:
    [
      CalcService
    ]
})

export class MapsModule {
}
