import { Routes, RouterModule }  from '@angular/router';

import {TinytimesReports} from './tinytimes-reports.component.ts'
import { Hour24ChannelDau} from './me/hour-24-channel-dau.component.ts'
import { Hour24ChannelDetail} from './me/hour-24-channel-details.component.ts'


// noinspection TypeScriptValidateTypes
const routes:Routes = [
  {
    path: '',
    component: TinytimesReports,
    children: [
      {path: '', redirectTo: 'gf-channel/24-hour-channel-dau', pathMatch: 'full'},
      {path: 'gf-channel/24-hour-channel-dau', component: Hour24ChannelDau},
      {path: 'gf-channel/24-hour-channel-details', component: Hour24ChannelDetail}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
