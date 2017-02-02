import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgaModule } from '../../theme/nga.module';

import { routing } from './charts.routing';
import { ChartsComponent } from './charts.component';

import { ChartistJsComponent } from './components/chartist-js/chartist-js.component';
import { ChartistJsService } from './components/chartist-js/chartist-js.service';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    ChartsComponent,
    ChartistJsComponent
  ],
  providers: [
    ChartistJsService
  ]
})
export class ChartsModule { }
