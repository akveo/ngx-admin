import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { routing } from './login.routing';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
