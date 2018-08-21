import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitulacionComponent } from './titulacion.component';
import { ListTitulacionComponent } from './list-titulacion/list-titulacion.component';
import { CrudTitulacionComponent } from './crud-titulacion/crud-titulacion.component';



const routes: Routes = [{
  path: '',
  component: TitulacionComponent,
  children: [{
    path: 'list-titulacion',
    component: ListTitulacionComponent,
  }, {
    path: 'crud-titulacion',
    component: CrudTitulacionComponent,
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

export class TitulacionRoutingModule { }

export const routedComponents = [
  TitulacionComponent,
  ListTitulacionComponent,
  CrudTitulacionComponent,
];
