import { IdiomasRoutingModule, routedComponents } from './idiomas-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { IdiomaService } from '../../@core/data/idioma.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudIdiomasComponent } from './crud-idiomas/crud-idiomas.component';
import { ListIdiomasComponent } from './list-idiomas/list-idiomas.component';
import { UserService } from '../../@core/data/users.service';

@NgModule({
  imports: [
    ThemeModule,
    IdiomasRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UserService,
    IdiomaService,
  ],
  exports: [
    CrudIdiomasComponent,
    ListIdiomasComponent,
  ],
})
export class IdiomasModule { }
