import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { DefaultButtonsComponent } from './default-buttons/default-buttons.component';
import { HeroButtonComponent } from './hero-buttons/hero-buttons.component';
import { ShapeButtonsComponent } from './shape-buttons/shape-buttons.component';
import { SizeButtonsComponent } from './size-buttons/size-buttons.component';
import { ButtonsComponent } from './buttons.component';

const components = [
  ButtonsComponent,
  DefaultButtonsComponent,
  HeroButtonComponent,
  ShapeButtonsComponent,
  SizeButtonsComponent,
];

@NgModule({
  imports: [
    SharedModule,
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
