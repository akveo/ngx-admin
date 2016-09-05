import { Routes, RouterModule }  from '@angular/router';

import {Reports} from './reports.component'
import { GfChannelDau} from './me/gf-channel-dau.component'


// noinspection TypeScriptValidateTypes
const routes:Routes = [
  {
    path: '',
    component: Reports,
    children: [
      {path: '', redirectTo: 'gf-channel/24-hour-channel-dau', pathMatch: 'full'},
      {path: 'gf-channel/24-hour-channel-dau', component: GfChannelDau},
    ]
  }
];

export const routing = RouterModule.forChild(routes);
