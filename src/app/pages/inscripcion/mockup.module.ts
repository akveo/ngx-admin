import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { MockupRoutingModule, routedComponents } from './mockup-routing.module';
import { SharedModule } from '../../shared/shared.module';
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
import { VerInformacionAspiranteComponent } from './ver-informacion-aspirante/ver-informacion-aspirante.component';
import { VerDatosBasicosComponent } from './ver-informacion-aspirante/ver-datos-basicos/ver-datos-basicos.component';
import { VerFormacionAcademicaComponent } from './ver-informacion-aspirante/ver-form-academ/ver-form-academ.component';
import { VerIdiomasComponent } from './ver-informacion-aspirante/ver-idiomas/ver-idiomas.component';
import { VerFormacionLaboralComponent } from './ver-informacion-aspirante/ver-form-laboral/ver-form-laboral.component';
import { VerDocumentosComponent } from './ver-informacion-aspirante/ver-documentos/ver-documentos.component';
import { VerDescuentosComponent } from './ver-informacion-aspirante/ver-descuentos/ver-descuentos.component';
import { VerTrabajoGradoComponent } from './ver-informacion-aspirante/ver-trabajo-grado/ver-trabajo-grado.component';
import { AsignarEntrevistadorComponent } from './asignar-entrevistador/asignar-entrevistador.component';

@NgModule({
  imports: [
    ThemeModule,
    MockupRoutingModule,
    Ng2SmartTableModule,
    SharedModule,
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
    VerInformacionAspiranteComponent,
    VerDatosBasicosComponent,
    VerFormacionAcademicaComponent,
    VerIdiomasComponent,
    VerFormacionLaboralComponent,
    VerDocumentosComponent,
    VerDescuentosComponent,
    VerTrabajoGradoComponent,
    AsignarEntrevistadorComponent,
  ],
  providers: [
    SmartTableService,
    SharedModule,
  ],
})
export class MockupModule { }
