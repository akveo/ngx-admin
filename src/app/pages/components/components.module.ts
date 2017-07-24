import { NgModule } from '@angular/core';
import { NgaCheckboxModule } from '@akveo/nga-theme';

import { TreeModule } from 'ng2-tree';
import { ToasterModule } from 'angular2-toaster';

import { SharedModule } from '../../shared.module';

import { ComponentsRoutingModule, routedComponents } from './components-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsRoutingModule,
    TreeModule,
    ToasterModule,
    NgaCheckboxModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ComponentsModule { }
