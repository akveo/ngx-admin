import { PersonaRoutingModule, routedComponents } from './persona-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonaService } from '../../@core/data/persona.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudPersonaComponent } from './crud-persona/crud-persona.component';

@NgModule({
  imports: [
    ThemeModule,
    PersonaRoutingModule,
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
    CrudPersonaComponent,
  ],
})
export class PersonaModule { }
