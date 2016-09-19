import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './forms.routing';

import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Forms } from './forms.component';
import { Inputs } from './components/inputs';
import { Layouts } from './components/layouts';

import { StandardInputs } from './components/inputs/components/standardInputs';
import { ValidationInputs } from './components/inputs/components/validationInputs';
import { GroupInputs } from './components/inputs/components/groupInputs';
import { CheckboxInputs } from './components/inputs/components/checkboxInputs';
import { Rating } from './components/inputs/components/ratinginputs';

import { InlineForm } from './components/layouts/components/inlineForm';
import { BlockForm } from './components/layouts/components/blockForm';
import { HorizontalForm } from './components/layouts/components/horizontalForm';
import { BasicForm } from './components/layouts/components/basicForm';
import { WithoutLabelsForm } from './components/layouts/components/withoutLabelsForm';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    RatingModule,
    routing
  ],
  declarations: [
    Layouts,
    Inputs,
    Forms,
    StandardInputs,
    ValidationInputs,
    GroupInputs,
    CheckboxInputs,
    Rating,
    InlineForm,
    BlockForm,
    HorizontalForm,
    BasicForm,
    WithoutLabelsForm
  ]
})
export default class FormsModule {
}
