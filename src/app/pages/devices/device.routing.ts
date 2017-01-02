import {Routes, RouterModule}  from '@angular/router';
import {DeviceComponent} from "./device.component";
import {HomeDevicesComponent} from "./homeDevices/homeDevices.component";
import {EditDeviceComponent} from "./editDevice/editDevice.component";

const routes: Routes = [
  {
    path: '',
    component: DeviceComponent,
    children: [
      {path: 'myDevices', component: HomeDevicesComponent},
      {path: ':sensorId', component: EditDeviceComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
