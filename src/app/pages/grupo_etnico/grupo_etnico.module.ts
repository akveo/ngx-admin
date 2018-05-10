import { GrupoEtnicoRoutingModule, routedComponents } from './grupo_etnico-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonaService } from '../../@core/data/persona.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudGrupoEtnicoComponent } from './crud-grupo_etnico/crud-grupo_etnico.component';

@NgModule({
  imports: [
    ThemeModule,
    GrupoEtnicoRoutingModule,
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
    CrudGrupoEtnicoComponent,
  ],
})
export class GrupoEtnicoModule { }
