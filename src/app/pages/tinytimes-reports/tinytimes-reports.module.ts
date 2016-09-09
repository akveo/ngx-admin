import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing }       from './tinytimes-reports.routing.ts';

import { EasyqService } from '../../../app/shared/service/easyq.service';

import { DataTableModule, SharedModule, PaginatorModule, CalendarModule } from 'primeng/primeng';


import { TinytimesReports } from './tinytimes-reports.component.ts';
import { Hour24ChannelDau } from './me/hour-24-channel-dau.component.ts'
import { Hour24ChannelDetail } from './me/hour-24-channel-details.component.ts'
import { Hour24ChannelDemo } from './me/hour-24-channel-demo.component.ts'
import { Hour24ChannelDetailSmart } from './me/hour-24-channel-details-smart.component'
import { NG2_SMART_TABLE_DIRECTIVES } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    DataTableModule,
    SharedModule,
    PaginatorModule,
    CalendarModule,
    routing
  ],
  declarations: [
    TinytimesReports,
    Hour24ChannelDau,
    Hour24ChannelDetail,
    Hour24ChannelDemo,
    Hour24ChannelDetailSmart,
    NG2_SMART_TABLE_DIRECTIVES
  ],
  providers:[
    EasyqService
  ]
})
export default class TinytimesReportsModule {
}
