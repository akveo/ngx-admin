import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { routing } from './register.routing';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
