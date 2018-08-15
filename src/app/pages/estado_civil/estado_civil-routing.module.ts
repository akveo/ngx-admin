import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoCivilComponent } from './estado_civil.component';
import { ListEstadoCivilComponent } from './list-estado_civil/list-estado_civil.component';
import { CrudEstadoCivilComponent } from './crud-estado_civil/crud-estado_civil.component';



const routes: Routes = [{
  path: '',
  component: EstadoCivilComponent,
  children: [{
    path: 'list-estado_civil',
    component: ListEstadoCivilComponent,
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

export class EstadoCivilRoutingModule { }

export const routedComponents = [
  EstadoCivilComponent,
  ListEstadoCivilComponent,
  CrudEstadoCivilComponent,
];
