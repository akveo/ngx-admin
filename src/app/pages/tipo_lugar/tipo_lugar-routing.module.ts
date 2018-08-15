import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoLugarComponent } from './tipo_lugar.component';
import { ListTipoLugarComponent } from './list-tipo_lugar/list-tipo_lugar.component';
import { CrudTipoLugarComponent } from './crud-tipo_lugar/crud-tipo_lugar.component';



const routes: Routes = [{
  path: '',
  component: TipoLugarComponent,
  children: [{
    path: 'list-tipo_lugar',
    component: ListTipoLugarComponent,
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

export class TipoLugarRoutingModule { }

export const routedComponents = [
  TipoLugarComponent,
  ListTipoLugarComponent,
  CrudTipoLugarComponent,
];
