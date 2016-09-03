import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DataProviderService } from '../../../app/shared';

import { routing }       from './reports.routing';
import { Reports } from './reports.component';
import { GfChannelDau } from './me/gf-channel-dau.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Reports,
    GfChannelDau
  ],
  providers:[
    DataProviderService
  ]
})
export default class ReportsModule {}
