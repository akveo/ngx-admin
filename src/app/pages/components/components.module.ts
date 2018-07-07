import { NgModule } from '@angular/core';

import { TreeModule } from 'angular-tree-component';

import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';
import { InputComponent } from './tree/input.component';

@NgModule({
  entryComponents: [InputComponent],
  imports: [
    ThemeModule,
    ComponentsRoutingModule,
    TreeModule,
  ],
  declarations: [
    ...routedComponents,
    InputComponent,
  ],
})
export class ComponentsModule { }
