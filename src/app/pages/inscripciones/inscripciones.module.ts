import { AutenticationService } from './../../@core/utils/autentication.service';
import { PersonaService } from './../../@core/data/persona.service';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { InscripcionesRoutingModule, routedComponents } from './inscripciones-routing.module';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InfoBasicaComponent } from './info-basica/info-basica.component';
import { UtilidadesService } from '../../@core/utils/utilidades.service';
import { SharedModule } from '../../shared/shared.module';
import { IdiomasComponent } from './posgrado/idiomas/idiomas.component';
import { DocumentosComponent } from './posgrado/documentos/documentos.component';
import { DescuentosComponent } from './posgrado/descuentos/descuentos.component';
import { TrabajoGradoComponent } from './posgrado/trabajo-grado/trabajo-grado.component';
import { FinInscripcionComponent } from './posgrado/fin-inscripcion/fin-inscripcion.component';
import { FormacionLaboralComponent } from './posgrado/formacion-laboral/formacion-laboral.component';
import { FormacionAcademicaComponent } from './posgrado/formacion-academica/formacion-academica.component';
import { InformacionContactoComponent } from './posgrado/informacion-contacto/informacion-contacto.component';
import { InformacionAdicionalComponent } from './posgrado/informacion-adicional/informacion-adicional.component';
import { SeleccionProgramaComponent } from './posgrado/seleccion-programa/seleccion-programa.component';

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
    InfoBasicaComponent,
    IdiomasComponent,
    DocumentosComponent,
    DescuentosComponent,
    TrabajoGradoComponent,
    FinInscripcionComponent,
    FormacionLaboralComponent,
    FormacionAcademicaComponent,
    InformacionContactoComponent,
    InformacionAdicionalComponent,
    SeleccionProgramaComponent,
  ],
  providers: [
    PersonaService,
    AutenticationService,
    UtilidadesService,
    SharedModule,
  ],
})
export class InscripcionesModule {
}
