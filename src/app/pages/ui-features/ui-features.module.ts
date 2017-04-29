import { NgModule } from '@angular/core';

import { NgxSharedModule } from '../../@shared/shared.module';

import { NgxUiFeaturesRoutingModule, routedComponents } from './ui-features-routing.module';

@NgModule({
  imports: [
    NgxSharedModule,
    NgxUiFeaturesRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class NgxUiFeaturesModule { }
