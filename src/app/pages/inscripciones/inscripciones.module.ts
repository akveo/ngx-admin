import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { InscripcionesRoutingModule, routedComponents } from './inscripciones-routing.module';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    ThemeModule,
    InscripcionesRoutingModule,
    Ng2SmartTableModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
    PosgradoComponent,
  ],
  providers: [
    SharedModule,
  ],
})
export class InscripcionesModule { }
