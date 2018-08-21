import { NivelFormacionRoutingModule, routedComponents } from './nivel_formacion-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProgramaAcademicoService } from '../../@core/data/programa_academico.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudNivelFormacionComponent } from './crud-nivel_formacion/crud-nivel_formacion.component';

@NgModule({
  imports: [
    ThemeModule,
    NivelFormacionRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ProgramaAcademicoService,
  ],
  exports: [
    CrudNivelFormacionComponent,
  ],
})
export class NivelFormacionModule { }
