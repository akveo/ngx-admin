import { EstadoCivilRoutingModule, routedComponents } from './estado_civil-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonaService } from '../../@core/data/persona.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudEstadoCivilComponent } from './crud-estado_civil/crud-estado_civil.component';

@NgModule({
  imports: [
    ThemeModule,
    EstadoCivilRoutingModule,
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
    CrudEstadoCivilComponent,
  ],
})
export class EstadoCivilModule { }
