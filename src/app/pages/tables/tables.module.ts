import { NgModule } from '@angular/core';
import { NgaTablesModule } from '@nga/theme';

import { SharedModule } from '../../shared.module';

import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table/smart-table.service';

@NgModule({
  imports: [
    SharedModule,
    TablesRoutingModule,
    NgaTablesModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }
