import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationService } from './search-map/location-service.service';

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot(),
    LeafletModule.forRoot(),
    MapsRoutingModule,
    AngularEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    LocationService,
  ],
})

export class MapsModule {
}
