import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { HomeComponent } from './home.component';
import { routing }       from './home.routing';

import { TreeModule } from 'primeng/primeng';
import { MenuService } from '../../shared/service/menu.service'
import { UserService } from '../../shared/service/user.service'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    routing
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    MenuService,
    UserService
  ]
})
export default class HomeModule {
}
