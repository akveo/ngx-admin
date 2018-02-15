import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { InscripcionesRoutingModule, routedComponents } from './inscripciones-routing.module';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { InscripcionesComponent } from './inscripciones.component';

@NgModule({
  imports: [
    ThemeModule,
    InscripcionesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    PosgradoComponent,
    InscripcionesComponent,
  ],
  providers: [
  ],
})
export class InscripcionesModule { }
