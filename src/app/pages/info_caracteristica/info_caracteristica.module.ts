import { UbicacionesService } from './../../@core/data/ubicaciones.service';
import { InfoCaracteristicaRoutingModule, routedComponents } from './info_caracteristica-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonaService } from '../../@core/data/persona.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudInfoCaracteristicaComponent } from './crud-info_caracteristica/crud-info_caracteristica.component';
import { ViewInfoCaracteristicaComponent } from './view-info_caracteristica/view-info_caracteristica.component';

@NgModule({
  imports: [
    ThemeModule,
    InfoCaracteristicaRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
],
  providers: [
    PersonaService,
    UbicacionesService,
  ],
  exports: [
    CrudInfoCaracteristicaComponent,
    ViewInfoCaracteristicaComponent,
  ],
})
export class InfoCaracteristicaModule { }
