import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './charts.routing';
import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';
import { MorrisComponent } from './components/morrisJs/morris.componenet';
import { MorrisService } from './components/morrisJs/morris.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Charts,
    ChartistJs,
    MorrisComponent
  ],
  providers: [
    ChartistJsService,
    MorrisService
  ]
})
export class ChartsModule {}
