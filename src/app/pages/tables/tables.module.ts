import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { DataFilterPipe } from './components/dataTables/data-filter.pipe';
import { HotTable, HotTableModule } from 'ng2-handsontable';

import { routing } from './tables.routing';
import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { BasicTablesService } from './components/basicTables/basicTables.service';
import { ResponsiveTable } from './components/basicTables/components/responsiveTable';
import { StripedTable } from './components/basicTables/components/stripedTable';
import { BorderedTable } from './components/basicTables/components/borderedTable';
import { HoverTable } from './components/basicTables/components/hoverTable';
import { CondensedTable } from './components/basicTables/components/condensedTable';
import { ContextualTable } from './components/basicTables/components/contextualTable';
import { SmartTables } from './components/smartTables/smartTables.component';
import { SmartTablesService } from './components/smartTables/smartTables.service';
import { DataTables } from './components/dataTables/dataTables.component';
import { DataTablesService } from './components/dataTables/dataTables.service';

import { HotTablesComponent } from './components/hotTables/hotTables.component';
import { HandsontableSectionComponent } from './components/hotTables/handsontable-section';
import { BasicDemoComponent } from './components/hotTables/handsontable/basic-demo';
import { SheetDemoComponent } from './components/hotTables/handsontable/sheet-demo';
import { FinanceDemoComponent } from './components/hotTables/handsontable/finance-demo';
import { ScienceDemoComponent } from './components/hotTables/handsontable/science-demo';
import { SportDemoComponent } from './components/hotTables/handsontable/sport-demo';
import { AdvancedDemoComponent } from './components/hotTables/handsontable/advanced-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule
  ],
  declarations: [
    Tables,
    BasicTables,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable,
    SmartTables,
    DataTables,
    DataFilterPipe,
    HotTablesComponent,
    HandsontableSectionComponent,
    BasicDemoComponent,
    AdvancedDemoComponent,
    FinanceDemoComponent,
    ScienceDemoComponent,
    SportDemoComponent,
    SheetDemoComponent
  ],
  providers: [
    BasicTablesService,
    SmartTablesService,
    DataTablesService
  ]
})
export class TablesModule {
}
