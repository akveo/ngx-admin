import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgaCheckboxModule } from '@akveo/nga-theme';

import { SharedModule } from '../../shared.module';

import { FormsRoutingModule, routedComponents } from './forms-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FormsRoutingModule,
    NgbModule,
    NgaCheckboxModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
