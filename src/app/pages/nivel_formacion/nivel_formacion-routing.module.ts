import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NivelFormacionComponent } from './nivel_formacion.component';
import { ListNivelFormacionComponent } from './list-nivel_formacion/list-nivel_formacion.component';
import { CrudNivelFormacionComponent } from './crud-nivel_formacion/crud-nivel_formacion.component';



const routes: Routes = [{
  path: '',
  component: NivelFormacionComponent,
  children: [{
    path: 'list-nivel_formacion',
    component: ListNivelFormacionComponent,
  }, {
    path: 'crud-nivel_formacion',
    component: CrudNivelFormacionComponent,
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

export class NivelFormacionRoutingModule { }

export const routedComponents = [
  NivelFormacionComponent,
  ListNivelFormacionComponent,
  CrudNivelFormacionComponent,
];
