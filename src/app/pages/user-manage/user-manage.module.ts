import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing }       from './user-manage.routing';
import { TreeModule, DropdownModule, GrowlModule} from 'primeng/primeng';
import { MenuService} from '../../shared/service/menu.service';

import { UserManageComponent } from './user-manage.component';
import { EditUserMenuComponent } from './components/edit-user-menu.component';
import { CreateUserComponent } from './components/create-user.component';

import { User, UserService } from '../../shared/service/user.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    DropdownModule,
    GrowlModule,
    routing
  ],
  declarations: [
    UserManageComponent,
    EditUserMenuComponent,
    CreateUserComponent
  ],
  providers: [
    MenuService,
    UserService
  ]
})
export default class UserManageModule {
}
