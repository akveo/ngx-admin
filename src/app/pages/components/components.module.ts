import { NgModule } from '@angular/core';
import { NgaComponentsModule } from '@nga/theme';

import { SharedModule } from '../../shared.module';

import { ComponentsRoutingModule, routedComponents } from './components-routing.module';

@NgModule({
  imports: [
    SharedModule,
    NgaComponentsModule,
    ComponentsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ComponentsModule { }
