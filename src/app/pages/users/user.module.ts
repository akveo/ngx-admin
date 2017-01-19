import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './user.routing';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {RatingModule} from "ng2-bootstrap";
import {NgaModule} from "../../theme/nga.module";

import { FormsModule as AngularFormsModule } from '@angular/forms';
import {UserService} from "../users/user.service";
import NotificationModule from "../notifications/notification.module";
import {UserComponent} from "./users.component";

@NgModule({
  imports: [
    AngularFormsModule,
    NgaModule,
    RatingModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NotificationModule,
    routing
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UserService
  ]
})
export default class UserModule {}
