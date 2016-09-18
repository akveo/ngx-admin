import { Routes, RouterModule }  from '@angular/router';

import { TinytimesReports } from './tinytimes-reports.component.ts'
import { Hour24ChannelSummaryComponent } from './gf-channel/hour-24-channel-summary.component.ts'
import { Hour24ChannelDetailsComponent } from './gf-channel/hour-24-channel-details.component.ts'

// noinspection TypeScriptValidateTypes
const routes:Routes = [
  {
    path: '',
    component: TinytimesReports,
    children: [
      {path: '', redirectTo: 'gf-channel/24-hour-channel-summary', pathMatch: 'full'},
      {path: 'gf-channel/24-hour-channel-summary', component: Hour24ChannelSummaryComponent},
      {path: 'gf-channel/24-hour-channel-details', component: Hour24ChannelDetailsComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);
