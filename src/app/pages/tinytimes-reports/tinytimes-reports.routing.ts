import { Routes, RouterModule }  from '@angular/router';

import {TinytimesReports} from './tinytimes-reports.component.ts'
import { Hour24ChannelDau} from './me/hour-24-channel-dau.component.ts'
import { Hour24ChannelDetail} from './me/hour-24-channel-details.component.ts'
import {Hour24ChannelDetailSmart} from './me/hour-24-channel-details-smart.component'
import { Hour24ChannelDemo} from './me/hour-24-channel-demo.component.ts'

// noinspection TypeScriptValidateTypes
const routes:Routes = [
  {
    path: '',
    component: TinytimesReports,
    children: [
      {path: '', redirectTo: 'gf-channel/24-hour-channel-dau', pathMatch: 'full'},
      {path: 'gf-channel/24-hour-channel-dau', component: Hour24ChannelDau},
      {path: 'gf-channel/24-hour-channel-details', component: Hour24ChannelDetail},
      {path: 'gf-channel/24-hour-channel-details-smart', component: Hour24ChannelDetailSmart},
      {path: 'gf-channel/24-hour-channel-demo', component: Hour24ChannelDemo}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
