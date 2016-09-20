import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing }       from './tinytimes-reports.routing.ts';

import { EasyqService } from '../../../app/shared/service/easyq.service';

import { TinytimesReports } from './tinytimes-reports.component.ts';
import { Hour24ChannelDailySummaryComponent } from './gf-channel/hour-24-channel-daily-summary.component.ts'
import { Hour24ChannelDailyDetailsComponent } from './gf-channel/hour-24-channel-daily-details.component.ts'
import { Hour24ChannelWeeklySummaryComponent } from './gf-channel/hour-24-channel-weekly-summary.component.ts'

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MeSimpleTableModule } from '../../shared/component/me-simple-table/me-simple-table.module'
import { MeSimpleChartModule } from '../../shared/component/me-simple-chart/me-simple-chart.module'
import { MeReportDescModule } from '../../shared/component/me-report-desc/me-report-desc.module'

import { NumToPercentPipe } from '../../shared/pipes/format'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    MeSimpleTableModule,
    MeSimpleChartModule,
    MeReportDescModule,
    routing
  ],
  declarations: [
    TinytimesReports,
    Hour24ChannelDailySummaryComponent,
    Hour24ChannelDailyDetailsComponent,
    Hour24ChannelWeeklySummaryComponent,
    NumToPercentPipe
  ],
  providers:[
    EasyqService
  ]
})
export default class TinytimesReportsModule {
}
