import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { EasyqService } from '../../../app/shared';

import { DataTableModule, SharedModule, PaginatorModule } from 'primeng/primeng';
import { routing }       from './tinytimes-reports.routing.ts';
import { TinytimesReports } from './tinytimes-reports.component.ts';
import { Hour24ChannelDau } from './me/hour-24-channel-dau.component.ts'
import { Hour24ChannelDetail} from './me/hour-24-channel-details.component.ts'

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
    TinytimesReports,
    Hour24ChannelDau,
    Hour24ChannelDetail
  ],
  providers:[
    EasyqService
  ]
})
export default class TinytimesReportsModule {
}
