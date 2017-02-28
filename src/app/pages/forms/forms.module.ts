import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2CompleterModule } from "ng2-completer";

import { routing }       from './forms.routing';

import { RatingModule } from 'ng2-bootstrap';
import { Forms } from './forms.component';
import { Inputs } from './components/inputs';

import { Layouts } from './components/layouts';

//Territory Forms
import { INDICATIONS_COMPONENTS } from './components/ter-forms/indications';
import { CADASTER_COMPONENTS } from './components/ter-forms/cadaster';
import { AddressCadasterForm } from './components/ter-forms/addressCadasterForm';

import { StandardInputs } from './components/inputs/components/standardInputs';
import { ValidationInputs } from './components/inputs/components/validationInputs';
import { GroupInputs } from './components/inputs/components/groupInputs';
import { CheckboxInputs } from './components/inputs/components/checkboxInputs';
import { Rating } from './components/inputs/components/ratinginputs';
import { SelectInputs } from './components/inputs/components/selectInputs';
import { SelectorWithAdd } from './components/inputs/components/selectorWithAdd';


import { InlineForm } from './components/layouts/components/inlineForm';
import { BlockForm } from './components/layouts/components/blockForm';
import { HorizontalForm } from './components/layouts/components/horizontalForm';
import { BasicForm } from './components/layouts/components/basicForm';
import { WithoutLabelsForm } from './components/layouts/components/withoutLabelsForm';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    RatingModule.forRoot(),
    routing,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    Ng2CompleterModule,
    ReactiveFormsModule
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
    SelectInputs,
    InlineForm,
    BlockForm,
    HorizontalForm,
    BasicForm,
    WithoutLabelsForm,
    SelectorWithAdd,
    //Territory Forms
    AddressCadasterForm,
    ...INDICATIONS_COMPONENTS,
    ...CADASTER_COMPONENTS

  ]
})
export class FormsModule {
}
