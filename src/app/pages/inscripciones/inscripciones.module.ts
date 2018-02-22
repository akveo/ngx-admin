import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { InscripcionesRoutingModule, routedComponents } from './inscripciones-routing.module';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    ThemeModule,
    InscripcionesRoutingModule,
    MatProgressBarModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    PosgradoComponent,
  ],
  providers: [],
})
export class InscripcionesModule { }
