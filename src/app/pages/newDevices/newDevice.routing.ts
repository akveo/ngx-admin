import {Routes, RouterModule}  from '@angular/router';
import {NewDeviceComponent} from "./newDevice.component";

const routes: Routes = [
  {
    path: '',
    component: NewDeviceComponent
  }
];

export const routing = RouterModule.forChild(routes);
