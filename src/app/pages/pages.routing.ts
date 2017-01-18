import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'device', loadChildren: () => System.import('./devices/device.module') },
      { path: 'claimDevice', loadChildren: () => System.import('./claimDevices/claimDevice.module.ts') },
      { path: 'new', loadChildren: () => System.import('./newDevices/newDevice.module') },
      { path: 'users', loadChildren: () => System.import('./users/user.module') },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
