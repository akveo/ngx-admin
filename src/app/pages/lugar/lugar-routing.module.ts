import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LugarComponent } from './lugar.component';
import { ListLugarComponent } from './list-lugar/list-lugar.component';
import { CrudLugarComponent } from './crud-lugar/crud-lugar.component';



const routes: Routes = [{
  path: '',
  component: LugarComponent,
  children: [{
    path: 'list-lugar',
    component: ListLugarComponent,
  }, {
    path: 'crud-lugar',
    component: CrudLugarComponent,
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

export class LugarRoutingModule { }

export const routedComponents = [
  LugarComponent,
  ListLugarComponent,
  CrudLugarComponent,
];
