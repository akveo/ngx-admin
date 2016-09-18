import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing }       from './tinytimes-reports.routing.ts';

import { EasyqService } from '../../../app/shared/service/easyq.service';

import { TinytimesReports } from './tinytimes-reports.component.ts';
import { Hour24ChannelSummaryComponent } from './gf-channel/hour-24-channel-summary.component.ts'
import { Hour24ChannelDetailsComponent } from './gf-channel/hour-24-channel-details.component.ts'
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommSimpleTableModule } from '../../shared/component/comm-simple-table/comm-simple-table.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CommSimpleTableModule,
    routing
  ],
  declarations: [
    TinytimesReports,
    Hour24ChannelSummaryComponent,
    Hour24ChannelDetailsComponent,
  ],
  providers:[
    EasyqService
  ]
})
export default class TinytimesReportsModule {
}
