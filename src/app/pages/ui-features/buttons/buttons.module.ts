import { NgModule } from '@angular/core';
import { NgaActionsModule, NgaSearchModule, NgaUserModule } from '@nga/theme';

import { SharedModule } from '../../../shared.module';

import { DefaultButtonsComponent } from './default-buttons/default-buttons.component';
import { HeroButtonComponent } from './hero-buttons/hero-buttons.component';
import { ShapeButtonsComponent } from './shape-buttons/shape-buttons.component';
import { SizeButtonsComponent } from './size-buttons/size-buttons.component';
import { ButtonsComponent } from './buttons.component';
import { ActionsGroupsComponent } from './actions-groups/actions-groups.component';
import { DropdownButtonsComponent } from './dropdown-buttons/dropdown-button.component';

const components = [
  ButtonsComponent,
  DefaultButtonsComponent,
  HeroButtonComponent,
  ShapeButtonsComponent,
  SizeButtonsComponent,
  ActionsGroupsComponent,
  DropdownButtonsComponent,
];

@NgModule({
  imports: [
    SharedModule,
    NgaActionsModule,
    NgaSearchModule,
    NgaUserModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class ButtonsModule { }
