import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoAdmisionComponent } from './estado_admision.component';
import { ListEstadoAdmisionComponent } from './list-estado_admision/list-estado_admision.component';
import { CrudEstadoAdmisionComponent } from './crud-estado_admision/crud-estado_admision.component';



const routes: Routes = [{
  path: '',
  component: EstadoAdmisionComponent,
  children: [{
    path: 'list-estado_admision',
    component: ListEstadoAdmisionComponent,
  }, {
    path: 'crud-estado_admision',
    component: CrudEstadoAdmisionComponent,
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

export class EstadoAdmisionRoutingModule { }

export const routedComponents = [
  EstadoAdmisionComponent,
  ListEstadoAdmisionComponent,
  CrudEstadoAdmisionComponent,
];
