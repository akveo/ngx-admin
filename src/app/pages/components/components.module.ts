import { NgModule } from '@angular/core';

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
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ComponentsModule { }
