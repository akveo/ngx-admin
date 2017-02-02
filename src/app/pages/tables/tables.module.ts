import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './tables.routing';
import { TablesComponent } from './tables.component';

import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { BasicTablesService } from './components/basic-tables/basic-tables.service';
import { BorderedTableComponent } from './components/basic-tables/components/bordered-table';
import { CondensedTableComponent } from './components/basic-tables/components/condensed-table';
import { ContextualTableComponent } from './components/basic-tables/components/contextual-table';
import { HoverTableComponent } from './components/basic-tables/components/hover-table';
import { ResponsiveTableComponent } from './components/basic-tables/components/responsive-table';
import { SmartTablesComponent } from './components/smart-tables/smart-tables.component';
import { SmartTablesService } from './components/smart-tables/smart-tables.service';
import { StripedTableComponent } from './components/basic-tables/components/striped-table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    TablesComponent,
    BasicTablesComponent,
    BorderedTableComponent,
    CondensedTableComponent,
    ContextualTableComponent,
    HoverTableComponent,
    ResponsiveTableComponent,
    SmartTablesComponent,
    StripedTableComponent
  ],
  providers: [
    BasicTablesService,
    SmartTablesService
  ]
})
export class TablesModule { }
