import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from 'ngx-charts';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './charts.routing';
import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { NgxCharts } from './components/ngxCharts/ngxCharts.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Charts,
    ChartistJs,
    NgxCharts
  ],
  providers: [
    ChartistJsService
  ]
})
export class ChartsModule {}
