import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmisionComponent } from './admision.component';
import { ListAdmisionComponent } from './list-admision/list-admision.component';
import { CrudAdmisionComponent } from './crud-admision/crud-admision.component';



const routes: Routes = [{
  path: '',
  component: AdmisionComponent,
  children: [{
    path: 'list-admision',
    component: ListAdmisionComponent,
  }, {
    path: 'crud-admision',
    component: CrudAdmisionComponent,
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

export class AdmisionRoutingModule { }

export const routedComponents = [
  AdmisionComponent,
  ListAdmisionComponent,
  CrudAdmisionComponent,
];
