import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './forms.routing';
import { Forms } from './forms.component';
import { Inputs } from './components/inputs';
import { Layouts } from './components/layouts';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Layouts,
    Inputs,
    Forms
  ]
})
export default class FormsModule {}
