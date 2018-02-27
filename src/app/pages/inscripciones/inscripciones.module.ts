import { AutenticationService } from './../../@core/utils/autentication.service';
import { PersonaService } from './../../@core/data/persona.service';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { InscripcionesRoutingModule, routedComponents } from './inscripciones-routing.module';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InfoBasicaComponent } from './info-basica/info-basica.component';

@NgModule({
  imports: [
    ThemeModule,
    InscripcionesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    PosgradoComponent,
    InfoBasicaComponent,
  ],
  providers: [
    PersonaService,
    AutenticationService,
  ],
})
export class InscripcionesModule { }
