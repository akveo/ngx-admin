import { InscripcionRoutingModule, routedComponents } from './inscripcion-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { ToasterModule } from 'angular2-toaster';
import { PersonaService } from '../../@core/data/persona.service';
import { CampusMidService } from '../../@core/data/campus_mid.service';
import { UbicacionesService } from '../../@core/data/ubicaciones.service';
import { CrudInfoCaracteristicaComponent } from '../info_caracteristica/crud-info_caracteristica/crud-info_caracteristica.component';
import { CrudInformacionContactoComponent } from '../informacion_contacto/crud-informacion_contacto/crud-informacion_contacto.component';
import { CrudInfoPersonaComponent } from '../info_persona/crud-info_persona/crud-info_persona.component';
import { InformacionContactoModule } from '../informacion_contacto/informacion_contacto.module';
import { InfoPersonaModule } from '../info_persona/info_persona.module';
import { InfoCaracteristicaModule } from '../info_caracteristica/info_caracteristica.module';
import { ImplicitAutenticationService } from './../../@core/utils/implicit_autentication.service';
import { NuxeoService } from './../../@core/utils/nuxeo.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { UtilidadesService } from '../../@core/utils/utilidades.service';
import { IdiomasModule } from '../idiomas/idiomas.module';
import { ListIdiomasComponent } from '../idiomas/list-idiomas/list-idiomas.component';
import { CrudIdiomasComponent } from '../idiomas/crud-idiomas/crud-idiomas.component';
import { FormacionAcademicaModule } from '../formacion_academica/formacion_academica.module';
import { ListFormacionAcademicaComponent } from '../formacion_academica/list-formacion_academica/list-formacion_academica.component';
import { CrudFormacionAcademicaComponent } from '../formacion_academica/crud-formacion_academica/crud-formacion_academica.component';
import { ExperienciaLaboralModule } from '../experiencia_laboral/experiencia_laboral.module';
import { ListExperienciaLaboralComponent } from '../experiencia_laboral/list-experiencia_laboral/list-experiencia_laboral.component';
import { CrudExperienciaLaboralComponent } from '../experiencia_laboral/crud-experiencia_laboral/crud-experiencia_laboral.component';
import { ProgramaAcademicoService } from '../../@core/data/programa_academico.service';

@NgModule({
  imports: [
    ThemeModule,
    InscripcionRoutingModule,
    SharedModule,
    ToasterModule,
    InformacionContactoModule,
    InfoPersonaModule,
    InfoCaracteristicaModule,
    MatExpansionModule,
    IdiomasModule,
    FormacionAcademicaModule,
    ExperienciaLaboralModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ImplicitAutenticationService,
    NuxeoService,
    PersonaService,
    CampusMidService,
    UbicacionesService,
    UtilidadesService,
    ProgramaAcademicoService,
  ],
  entryComponents: [
    ListIdiomasComponent,
    CrudIdiomasComponent,
    ListFormacionAcademicaComponent,
    CrudFormacionAcademicaComponent,
    ListExperienciaLaboralComponent,
    CrudExperienciaLaboralComponent,
    CrudInfoPersonaComponent,
    CrudInfoCaracteristicaComponent,
    CrudInformacionContactoComponent,
  ],
})
export class InscripcionModule { }
