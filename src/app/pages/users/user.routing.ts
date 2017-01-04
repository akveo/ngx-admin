import {Routes, RouterModule}  from '@angular/router';
import {UserComponent} from "./users.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

export const routing = RouterModule.forChild(routes);
