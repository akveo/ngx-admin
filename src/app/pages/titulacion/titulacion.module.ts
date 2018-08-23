import { TitulacionRoutingModule, routedComponents } from './titulacion-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProgramaAcademicoService } from '../../@core/data/programa_academico.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudTitulacionComponent } from './crud-titulacion/crud-titulacion.component';

@NgModule({
  imports: [
    ThemeModule,
    TitulacionRoutingModule,
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
    CrudTitulacionComponent,
  ],
})
export class TitulacionModule { }
