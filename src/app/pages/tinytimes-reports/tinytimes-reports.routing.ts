import { Routes, RouterModule }  from '@angular/router';

import { TinytimesReports } from './tinytimes-reports.component.ts'
import { Hour24ChannelDailySummaryComponent } from './gf-channel/hour-24-channel-daily-summary.component.ts'
import { Hour24ChannelDailyDetailsComponent } from './gf-channel/hour-24-channel-daily-details.component.ts'
import { Hour24ChannelWeeklySummaryComponent } from './gf-channel/hour-24-channel-weekly-summary.component.ts'

// noinspection TypeScriptValidateTypes
const routes:Routes = [
  {
    path: '',
    component: TinytimesReports,
    children: [
      {path: '', redirectTo: 'gf-channel/24-hour-channel-daily-summary', pathMatch: 'full'},
      {path: 'gf-channel/24-hour-channel-daily-summary', component: Hour24ChannelDailySummaryComponent},
      {path: 'gf-channel/24-hour-channel-daily-details', component: Hour24ChannelDailyDetailsComponent},
      {path: 'gf-channel/24-hour-channel-weekly-summary', component: Hour24ChannelWeeklySummaryComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);
