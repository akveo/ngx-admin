import { EnfasisRoutingModule, routedComponents } from './enfasis-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProgramaAcademicoService } from '../../@core/data/programa_academico.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudEnfasisComponent } from './crud-enfasis/crud-enfasis.component';

@NgModule({
  imports: [
    ThemeModule,
    EnfasisRoutingModule,
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
    CrudEnfasisComponent,
  ],
})
export class EnfasisModule { }
