import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { EasyqService } from '../../../app/shared';

import { DataTableModule, SharedModule, PaginatorModule } from 'primeng/primeng';
import { routing }       from './reports.routing';
import { Reports } from './reports.component';
import { GfChannelDau } from './me/gf-channel-dau.component'
import { Hour24ChannelDetail} from './me/24-hour-channel-details.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    DataTableModule,
    SharedModule,
    PaginatorModule,
    routing
  ],
  declarations: [
    Reports,
    GfChannelDau,
    Hour24ChannelDetail
  ],
  providers:[
    EasyqService
  ]
})
export default class ReportsModule {}
