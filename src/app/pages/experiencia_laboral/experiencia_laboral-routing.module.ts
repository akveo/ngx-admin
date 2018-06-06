import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienciaLaboralComponent } from './experiencia_laboral.component';
import { ListExperienciaLaboralComponent } from './list-experiencia_laboral/list-experiencia_laboral.component';
import { CrudExperienciaLaboralComponent } from './crud-experiencia_laboral/crud-experiencia_laboral.component';

const routes: Routes = [{
  path: '',
  component: ExperienciaLaboralComponent,
  children: [{
    path: 'list-experiencia_laboral',
    component: ListExperienciaLaboralComponent,
  }, {
    path: 'crud-experiencia_laboral',
    component: CrudExperienciaLaboralComponent,
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

export class ExperienciaLaboralRoutingModule { }

export const routedComponents = [
    ExperienciaLaboralComponent,
    ListExperienciaLaboralComponent,
    CrudExperienciaLaboralComponent,
];
