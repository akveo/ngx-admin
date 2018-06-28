import { NgModule } from '@angular/core';

import { TreeModule } from 'angular-tree-component';
import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';
import { InputComponent } from './tree/input.component';

@NgModule({
  entryComponents: [InputComponent],
  imports: [
    ThemeModule,
    ComponentsRoutingModule,
    TreeModule,
    ToasterModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
    InputComponent,
  ],
})
export class ComponentsModule { }
