import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SharedModule } from '../../shared.module';

import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table/smart-table.service';

@NgModule({
  imports: [
    SharedModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }
