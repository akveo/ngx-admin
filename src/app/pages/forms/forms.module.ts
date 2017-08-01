import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbCheckboxModule } from '@nebular/theme';

import { SharedModule } from '../../shared.module';

import { FormsRoutingModule, routedComponents } from './forms-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FormsRoutingModule,
    NgbModule,
    NbCheckboxModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
