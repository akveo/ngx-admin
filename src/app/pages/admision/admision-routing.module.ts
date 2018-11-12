import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmisionComponent } from './admision.component';
import { ListAdmisionComponent } from './list-admision/list-admision.component';
import { CrudAdmisionComponent } from './crud-admision/crud-admision.component';
// import { AuthGuard } from '../../@core/_guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: AdmisionComponent,
  children: [{
    path: 'list-admision',
    component: ListAdmisionComponent,
    // canActivate: [AuthGuard],
}, {
    path: 'crud-admision',
    component: CrudAdmisionComponent,
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

export class AdmisionRoutingModule { }

export const routedComponents = [
  AdmisionComponent,
  ListAdmisionComponent,
  CrudAdmisionComponent,
];
