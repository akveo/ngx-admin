import { NgModule } from '@angular/core';

import { NgxSharedModule } from '../../@shared/shared.module';

import { NgxEditorsRoutingModule, routedComponents } from './editors-routing.module';

@NgModule({
  imports: [
    NgxSharedModule,
    NgxEditorsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class NgxEditorsModule { }
