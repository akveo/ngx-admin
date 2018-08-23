import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnfasisComponent } from './enfasis.component';
import { ListEnfasisComponent } from './list-enfasis/list-enfasis.component';
import { CrudEnfasisComponent } from './crud-enfasis/crud-enfasis.component';



const routes: Routes = [{
  path: '',
  component: EnfasisComponent,
  children: [{
    path: 'list-enfasis',
    component: ListEnfasisComponent,
  }, {
    path: 'crud-enfasis',
    component: CrudEnfasisComponent,
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

export class EnfasisRoutingModule { }

export const routedComponents = [
  EnfasisComponent,
  ListEnfasisComponent,
  CrudEnfasisComponent,
];
