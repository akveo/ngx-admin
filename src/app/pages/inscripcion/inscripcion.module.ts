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
import {MatExpansionModule} from '@angular/material/expansion';
import { UtilidadesService } from '../../@core/utils/utilidades.service';

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
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ImplicitAutenticationService,
    PersonaService,
    CampusMidService,
    UbicacionesService,
    UtilidadesService,
  ],
  entryComponents: [
    CrudInfoPersonaComponent,
    CrudInfoCaracteristicaComponent,
    CrudInformacionContactoComponent,
  ],
})
export class InscripcionModule { }
