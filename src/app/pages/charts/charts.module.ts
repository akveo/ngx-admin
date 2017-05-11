import { NgModule } from '@angular/core';
import { NgaChartsModule } from '@nga/theme';

import { SharedModule } from '../../shared.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';

@NgModule({
  imports: [
    SharedModule,
    NgaChartsModule,
    ChartsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ChartsModule { }
