import { NgModule }      from '@angular/core';
import {UserService} from "./user.service";

@NgModule({
  providers: [
    UserService
  ]
})
export default class UserServiceModule {}
