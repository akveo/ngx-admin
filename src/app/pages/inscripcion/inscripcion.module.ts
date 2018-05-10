import { InscripcionRoutingModule, routedComponents } from './inscripcion-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { ToasterModule } from 'angular2-toaster';
import { PersonaService } from '../../@core/data/persona.service';
import { UbicacionesService } from '../../@core/data/ubicaciones.service';
import { CrudInfoCaracteristicaComponent } from '../info_caracteristica/crud-info_caracteristica/crud-info_caracteristica.component';
import { CrudInformacionContactoComponent } from '../informacion_contacto/crud-informacion_contacto/crud-informacion_contacto.component';
import { CrudInfoPersonaComponent } from '../info_persona/crud-info_persona/crud-info_persona.component';
import { InformacionContactoModule } from '../informacion_contacto/informacion_contacto.module';
import { InfoPersonaModule } from '../info_persona/info_persona.module';
import { InfoCaracteristicaModule } from '../info_caracteristica/info_caracteristica.module';

@NgModule({
  imports: [
    ThemeModule,
    InscripcionRoutingModule,
    SharedModule,
    ToasterModule,
    InformacionContactoModule,
    InfoPersonaModule,
    InfoCaracteristicaModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    PersonaService,
    UbicacionesService,
  ],
  entryComponents: [
    CrudInfoPersonaComponent,
    CrudInfoCaracteristicaComponent,
    CrudInformacionContactoComponent,
  ],
})
export class InscripcionModule { }
