import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiomasComponent } from './idiomas.component';
import { ListIdiomasComponent } from './list-idiomas/list-idiomas.component';
import { CrudIdiomasComponent } from './crud-idiomas/crud-idiomas.component';
// import { AuthGuard } from '../../@core/_guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: IdiomasComponent,
  children: [{
    path: 'list-idiomas',
    component: ListIdiomasComponent,
    // canActivate: [AuthGuard],
 }, {
    path: 'crud-idiomas',
    component: CrudIdiomasComponent,
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

export class IdiomasRoutingModule { }

export const routedComponents = [
    IdiomasComponent,
    ListIdiomasComponent,
    CrudIdiomasComponent,
];
