import { TipoDiscapacidadRoutingModule, routedComponents } from './tipo_discapacidad-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonaService } from '../../@core/data/persona.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudTipoDiscapacidadComponent } from './crud-tipo_discapacidad/crud-tipo_discapacidad.component';

@NgModule({
  imports: [
    ThemeModule,
    TipoDiscapacidadRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    PersonaService,
  ],
  exports: [
    CrudTipoDiscapacidadComponent,
  ],
})
export class TipoDiscapacidadModule { }
