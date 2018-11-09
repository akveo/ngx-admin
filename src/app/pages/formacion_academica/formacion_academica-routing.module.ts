import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormacionAcademicaComponent } from './formacion_academica.component';
import { ListFormacionAcademicaComponent } from './list-formacion_academica/list-formacion_academica.component';
import { CrudFormacionAcademicaComponent } from './crud-formacion_academica/crud-formacion_academica.component';
// import { AuthGuard } from '../../@core/_guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: FormacionAcademicaComponent,
  children: [{
    path: 'list-formacion_academica',
    component: ListFormacionAcademicaComponent,
    // canActivate: [AuthGuard],
  }, {
    path: 'crud-formacion_academica',
    component: CrudFormacionAcademicaComponent,
    // canActivate: [AuthGuard],
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

export class FormacionAcademicaRoutingModule { }

export const routedComponents = [
    FormacionAcademicaComponent,
    ListFormacionAcademicaComponent,
    CrudFormacionAcademicaComponent,
];
