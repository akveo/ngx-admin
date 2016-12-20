import {Routes, RouterModule}  from '@angular/router';
import {NewDeviceComponent} from './newDevice/newDevice.component';
import {DeviceComponent} from "./device.component";

const routes: Routes = [
  {
    path: '',
    component: DeviceComponent
  }
];

export const routing = RouterModule.forChild(routes);
