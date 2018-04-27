import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoEtnicoComponent } from './grupo_etnico.component';
import { ListGrupoEtnicoComponent } from './list-grupo_etnico/list-grupo_etnico.component';
import { CrudGrupoEtnicoComponent } from './crud-grupo_etnico/crud-grupo_etnico.component';



const routes: Routes = [{
  path: '',
  component: GrupoEtnicoComponent,
  children: [{
    path: 'list-grupo_etnico',
    component: ListGrupoEtnicoComponent,
  }, {
    path: 'crud-grupo_etnico',
    component: CrudGrupoEtnicoComponent,
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

export class GrupoEtnicoRoutingModule { }

export const routedComponents = [
  GrupoEtnicoComponent,
  ListGrupoEtnicoComponent,
  CrudGrupoEtnicoComponent,
];
