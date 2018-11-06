import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiomasComponent } from './idiomas.component';
import { ListIdiomasComponent } from './list-idiomas/list-idiomas.component';
import { CrudIdiomasComponent } from './crud-idiomas/crud-idiomas.component';

const routes: Routes = [{
  path: '',
  component: IdiomasComponent,
  children: [{
    path: 'list-idiomas',
    component: ListIdiomasComponent,
  }, {
    path: 'crud-idiomas',
    component: CrudIdiomasComponent,
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

export class IdiomasRoutingModule { }

export const routedComponents = [
    IdiomasComponent,
    ListIdiomasComponent,
    CrudIdiomasComponent,
];
