import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodologiaComponent } from './metodologia.component';
import { ListMetodologiaComponent } from './list-metodologia/list-metodologia.component';
import { CrudMetodologiaComponent } from './crud-metodologia/crud-metodologia.component';



const routes: Routes = [{
  path: '',
  component: MetodologiaComponent,
  children: [{
    path: 'list-metodologia',
    component: ListMetodologiaComponent,
  }, {
    path: 'crud-metodologia',
    component: CrudMetodologiaComponent,
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

export class MetodologiaRoutingModule { }

export const routedComponents = [
  MetodologiaComponent,
  ListMetodologiaComponent,
  CrudMetodologiaComponent,
];
