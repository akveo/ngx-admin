import { Routes, RouterModule }  from '@angular/router';

import {Reports} from './reports.component'
import { GfChannelDau} from './me/gf-channel-dau.component'
import { Hour24ChannelDetail} from './me/24-hour-channel-details.component'


// noinspection TypeScriptValidateTypes
const routes:Routes = [
  {
    path: '',
    component: Reports,
    children: [
      {path: '', redirectTo: 'gf-channel/24-hour-channel-dau', pathMatch: 'full'},
      {path: 'gf-channel/24-hour-channel-dau', component: GfChannelDau},
      {path: 'gf-channel/24-hour-channel-details', component: Hour24ChannelDetail}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
