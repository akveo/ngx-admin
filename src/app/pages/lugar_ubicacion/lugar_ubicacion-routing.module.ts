import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LugarUbicacionComponent } from './lugar_ubicacion.component';
import { ListLugarUbicacionComponent } from './list-lugar_ubicacion/list-lugar_ubicacion.component';
import { CrudLugarUbicacionComponent } from './crud-lugar_ubicacion/crud-lugar_ubicacion.component';



const routes: Routes = [{
  path: '',
  component: LugarUbicacionComponent,
  children: [{
    path: 'list-lugar_ubicacion',
    component: ListLugarUbicacionComponent,
  }, {
    path: 'crud-lugar_ubicacion',
    component: CrudLugarUbicacionComponent,
  }],
}];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [
      RouterModule,
  ],
})

export class LugarUbicacionRoutingModule { }

export const routedComponents = [
  LugarUbicacionComponent,
  ListLugarUbicacionComponent,
  CrudLugarUbicacionComponent,
];
