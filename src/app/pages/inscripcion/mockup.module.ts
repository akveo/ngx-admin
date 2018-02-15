import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { MockupRoutingModule, routedComponents } from './mockup-routing.module';
import { DatosBasicosComponent } from './forms/datos-basicos/datos-basicos.component';
import { FormacionAcademicaComponent } from './forms/formacion-academica/formacion-academica.component';
import { IdiomaComponent } from './forms/idioma/idioma.component';
import { FormacionLaboralComponent } from './forms/formacion-laboral/formacion-laboral.component';
import { DocumentosComponent } from './forms/documentos/documentos.component';
import { DescuentosComponent } from './forms/descuentos/descuentos.component';
import { TrabajoGradoComponent } from './forms/trabajo-grado/trabajo-grado.component';
import { FinInscripcionComponent } from './forms/fin-inscripcion/fin-inscripcion.component';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { RegistroComponent } from './registro/registro.component';
import { VerAspirantesComponent } from './ver-aspirantes/ver-aspirantes.component';
import { EstadoInscripcionesComponent } from './estado-inscripciones/estado-inscripciones.component';

@NgModule({
  imports: [
    ThemeModule,
    MockupRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    DatosBasicosComponent,
    FormacionAcademicaComponent,
    IdiomaComponent,
    FormacionLaboralComponent,
    DocumentosComponent,
    DescuentosComponent,
    TrabajoGradoComponent,
    FinInscripcionComponent,
    RegistroComponent,
    VerAspirantesComponent,
    EstadoInscripcionesComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class MockupModule { }
