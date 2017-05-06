import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';

import { FormsRoutingModule, routedComponents } from './forms-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FormsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
