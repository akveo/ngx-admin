import { GeneroRoutingModule, routedComponents } from './genero-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonaService } from '../../@core/data/persona.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudGeneroComponent } from './crud-genero/crud-genero.component';

@NgModule({
  imports: [
    ThemeModule,
    GeneroRoutingModule,
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
    CrudGeneroComponent,
  ],
})
export class GeneroModule { }
