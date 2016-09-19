import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule }           from '../../theme/nga.module';

import { routing }     from './tables.routing';
import { Tables }      from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { SmartTables } from './components/smartTables/smartTables.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    NgaModule,
    routing
  ],
  declarations: [
    Tables,
    BasicTables,
    SmartTables
  ]
})
export default class TablesModule {}
