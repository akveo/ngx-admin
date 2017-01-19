import {Routes, RouterModule}  from '@angular/router';
import {ClaimDevicesComponent} from "./claimDevices.component";

const routes: Routes = [
  {
    path: '',
    component: ClaimDevicesComponent
  }
];

export const routing = RouterModule.forChild(routes);
