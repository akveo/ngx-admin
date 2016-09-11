import { Routes, RouterModule }  from '@angular/router';

import { UserManageComponent } from './user-manage.component'
import { EditUserMenuComponent } from './components/edit-user-menu.component'
import { CreateUserComponent } from './components/create-user.component'


const routes:Routes = [
  {
    path: '',
    component: UserManageComponent,
    children: [
      {path: 'edit-user-menu', component: EditUserMenuComponent},
      {path: 'create-user', component: CreateUserComponent}
    ]
  }
];
export const routing = RouterModule.forChild(routes);
