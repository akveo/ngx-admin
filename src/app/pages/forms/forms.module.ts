import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule, NbDatepickerModule,
  NbInputModule,
  NbRadioModule, NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DefaultButtonsComponent } from './buttons/default-buttons/default-buttons.component';
import { OutlineButtonsComponent } from './buttons/outline-buttons/outline-buttons.component';
import { HeroButtonComponent } from './buttons/hero-buttons/hero-buttons.component';
import { ShapeButtonsComponent } from './buttons/shape-buttons/shape-buttons.component';
import { SizeButtonsComponent } from './buttons/size-buttons/size-buttons.component';
import { ActionGroupsComponent } from './buttons/action-groups/action-groups.component';
import { LabeledActionsGroupComponent } from './buttons/labeled-actions-group/labeled-actions-group.component';
import { ButtonElementsComponent } from './buttons/button-elements/button-elements.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    DefaultButtonsComponent,
    OutlineButtonsComponent,
    HeroButtonComponent,
    ShapeButtonsComponent,
    SizeButtonsComponent,
    ActionGroupsComponent,
    LabeledActionsGroupComponent,
    ButtonElementsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
  ],
})
export class FormsModule { }
