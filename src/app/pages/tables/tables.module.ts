import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { WithOptionsComponent } from './with-options/with-options.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    DataTablesModule,
  ],
  declarations: [
    ...routedComponents,
    WithOptionsComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }
