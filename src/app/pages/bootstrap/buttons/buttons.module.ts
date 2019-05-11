import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { DefaultButtonsComponent } from './default-buttons/default-buttons.component';
import { HeroButtonComponent } from './hero-buttons/hero-buttons.component';
import { ShapeButtonsComponent } from './shape-buttons/shape-buttons.component';
import { SizeButtonsComponent } from './size-buttons/size-buttons.component';
import { ButtonsComponent } from './buttons.component';
import { DropdownButtonsComponent } from './dropdown-buttons/dropdown-button.component';
import { BlockLevelButtonsComponent } from './block-level-buttons/block-level-buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { IconButtonsComponent } from './icon-buttons/icon-buttons.component';

const components = [
  ButtonsComponent,
  DefaultButtonsComponent,
  HeroButtonComponent,
  ShapeButtonsComponent,
  SizeButtonsComponent,
  DropdownButtonsComponent,
  BlockLevelButtonsComponent,
  ButtonGroupsComponent,
  IconButtonsComponent,
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
