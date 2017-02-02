import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as AngularFormsModule } from '@angular/forms';

import { RatingModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './forms.routing';
import { FormsComponent } from './forms.component';
import { InputsComponent } from './components/inputs';
import { LayoutsComponent } from './components/layouts';

import { CheckboxInputsComponent } from './components/inputs/components/checkbox-inputs';
import { GroupInputsComponent } from './components/inputs/components/group-inputs';
import { RatingComponent } from './components/inputs/components/rating-inputs';
import { SelectInputsComponent } from './components/inputs/components/select-inputs';
import { StandardInputsComponent } from './components/inputs/components/standard-inputs';
import { ValidationInputsComponent } from './components/inputs/components/validation-inputs';

import { BasicFormComponent } from './components/layouts/components/basic-form';
import { BlockFormComponent } from './components/layouts/components/block-form';
import { HorizontalFormComponent } from './components/layouts/components/horizontal-form';
import { InlineFormComponent } from './components/layouts/components/inline-form';
import { WithoutLabelsFormComponent } from './components/layouts/components/without-labels-form';

@NgModule({
  imports: [
    AngularFormsModule,
    CommonModule,
    NgaModule,
    RatingModule.forRoot(),
    routing
  ],
  declarations: [
    FormsComponent,
    InputsComponent,
    LayoutsComponent,
    CheckboxInputsComponent,
    GroupInputsComponent,
    RatingComponent,
    SelectInputsComponent,
    StandardInputsComponent,
    ValidationInputsComponent,
    BasicFormComponent,
    BlockFormComponent,
    HorizontalFormComponent,
    InlineFormComponent,
    WithoutLabelsFormComponent
  ]
})
export class FormsModule { }
