import {Routes, RouterModule}  from '@angular/router';
import {NewDeviceComponent} from './newDevice/newDevice.component';
import {ListDevicesComponent} from './listDevices/listDevices.component';
import {DeviceComponent} from "./device.component";

const routes: Routes = [
  {
    path: '',
    component: DeviceComponent,
    children: [
      {path: 'new', component: NewDeviceComponent},
      {path: 'list', component: ListDevicesComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
