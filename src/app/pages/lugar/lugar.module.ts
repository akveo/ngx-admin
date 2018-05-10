import { LugarRoutingModule, routedComponents } from './lugar-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { UbicacionesService } from '../../@core/data/ubicaciones.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudLugarComponent } from './crud-lugar/crud-lugar.component';

@NgModule({
  imports: [
    ThemeModule,
    LugarRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UbicacionesService,
  ],
  exports: [
    CrudLugarComponent,
  ],
})
export class LugarModule { }
