import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { DefaultButtonsComponent } from './default-buttons/default-buttons.component';
import { HeroButtonComponent } from './hero-buttons/hero-buttons.component';
import { ShapeButtonsComponent } from './shape-buttons/shape-buttons.component';
import { SizeButtonsComponent } from './size-buttons/size-buttons.component';
import { ButtonsComponent } from './buttons.component';
import { ActionGroupsComponent } from './action-groups/action-groups.component';
import { LabeledActionsGroupComponent } from './labeled-actions-group/labeled-actions-group.component';
import { OutlineButtonsComponent } from './outline-buttons/outline-buttons.component';
import { ButtonElementsComponent } from './button-elements/button-elements.component';

const components = [
  ButtonsComponent,
  DefaultButtonsComponent,
  OutlineButtonsComponent,
  HeroButtonComponent,
  ShapeButtonsComponent,
  SizeButtonsComponent,
  ActionGroupsComponent,
  LabeledActionsGroupComponent,
  ButtonElementsComponent,
];

@NgModule({
  imports: [
    ThemeModule,
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
