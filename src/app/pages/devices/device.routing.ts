import {Routes, RouterModule}  from '@angular/router';
import {NewDeviceComponent} from './newDevice/newDevice.component';
import {ListDevicesComponent} from './listDevices/listDevices.component';
import {DeviceComponent} from "./device.component";
import {MyDevicesComponent} from "./myDevices/myDevices.component";
import {EditDeviceComponent} from "./editDevice/editDevice.component";

const routes: Routes = [
  {
    path: '',
    component: DeviceComponent,
    children: [
      {path: 'new', component: NewDeviceComponent},
      {path: 'list', component: ListDevicesComponent},
      {path: 'myDevices', component: MyDevicesComponent},
      {path: ':sensorId', component: EditDeviceComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
