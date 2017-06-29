import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../shared.module';

import { FormsRoutingModule, routedComponents } from './forms-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FormsRoutingModule,
    NgbModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
