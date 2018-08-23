import { MetodologiaRoutingModule, routedComponents } from './metodologia-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProgramaAcademicoService } from '../../@core/data/programa_academico.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudMetodologiaComponent } from './crud-metodologia/crud-metodologia.component';

@NgModule({
  imports: [
    ThemeModule,
    MetodologiaRoutingModule,
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
    CrudMetodologiaComponent,
  ],
})
export class MetodologiaModule { }
