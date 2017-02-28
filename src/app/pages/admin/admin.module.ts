import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing }       from './admin.routing';
import { Admin }       from './admin.component';
import { Territories } from './components/territories';
import { TerritoriesService } from './components/territories/territories.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
  ],
  declarations: [
    Admin,
    Territories,
  ],
  providers: [
    TerritoriesService,
  ]
})
export class AdminModule {
}
