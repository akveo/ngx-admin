import { NgModule } from '@angular/core';

import { NgxSharedModule } from '../../@shared/shared.module';

import { NgxFormsRoutingModule, routedComponents } from './forms-routing.module';

@NgModule({
  imports: [
    NgxSharedModule,
    NgxFormsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class NgxFormsModule { }
