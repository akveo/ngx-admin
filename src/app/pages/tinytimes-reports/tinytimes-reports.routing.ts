import { Routes, RouterModule }  from '@angular/router';

import {TinytimesReports} from './tinytimes-reports.component.ts'
import { Hour24ChannelDauComponent} from './me/hour-24-channel-dau.component.ts'
import { Hour24ChannelDetailComponent} from './me/hour-24-channel-details.component.ts'
import {Hour24ChannelDetailSmartComponent} from './me/hour-24-channel-details-smart.component'
import { Hour24ChannelDemoComponent} from './me/hour-24-channel-demo.component.ts'

// noinspection TypeScriptValidateTypes
const routes:Routes = [
  {
    path: '',
    component: TinytimesReports,
    children: [
      {path: '', redirectTo: 'gf-channel/24-hour-channel-dau', pathMatch: 'full'},
      {path: 'gf-channel/24-hour-channel-dau', component: Hour24ChannelDauComponent},
      {path: 'gf-channel/24-hour-channel-details', component: Hour24ChannelDetailComponent},
      {path: 'gf-channel/24-hour-channel-details-smart', component: Hour24ChannelDetailSmartComponent},
      {path: 'gf-channel/24-hour-channel-demo', component: Hour24ChannelDemoComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
