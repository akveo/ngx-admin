import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDiscapacidadComponent } from './tipo_discapacidad.component';
import { ListTipoDiscapacidadComponent } from './list-tipo_discapacidad/list-tipo_discapacidad.component';
import { CrudTipoDiscapacidadComponent } from './crud-tipo_discapacidad/crud-tipo_discapacidad.component';



const routes: Routes = [{
  path: '',
  component: TipoDiscapacidadComponent,
  children: [{
    path: 'list-tipo_discapacidad',
    component: ListTipoDiscapacidadComponent,
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

export class TipoDiscapacidadRoutingModule { }

export const routedComponents = [
  TipoDiscapacidadComponent,
  ListTipoDiscapacidadComponent,
  CrudTipoDiscapacidadComponent,
];
