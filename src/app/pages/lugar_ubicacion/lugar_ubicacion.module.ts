import { LugarUbicacionRoutingModule, routedComponents } from './lugar_ubicacion-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { UbicacionesService } from '../../@core/data/ubicaciones.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudLugarUbicacionComponent } from './crud-lugar_ubicacion/crud-lugar_ubicacion.component';

@NgModule({
  imports: [
    ThemeModule,
    LugarUbicacionRoutingModule,
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
    CrudLugarUbicacionComponent,
  ],
})
export class LugarUbicacionModule { }
