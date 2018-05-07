import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoCaracteristicaComponent } from './info_caracteristica.component';
import { ListInfoCaracteristicaComponent } from './list-info_caracteristica/list-info_caracteristica.component';
import { CrudInfoCaracteristicaComponent } from './crud-info_caracteristica/crud-info_caracteristica.component';



const routes: Routes = [{
  path: '',
  component: InfoCaracteristicaComponent,
  children: [{
    path: 'list-info_caracteristica',
    component: ListInfoCaracteristicaComponent,
  }, {
    path: 'crud-info_caracteristica',
    component: CrudInfoCaracteristicaComponent,
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

export class InfoCaracteristicaRoutingModule { }

export const routedComponents = [
  InfoCaracteristicaComponent,
  ListInfoCaracteristicaComponent,
  CrudInfoCaracteristicaComponent,
];
