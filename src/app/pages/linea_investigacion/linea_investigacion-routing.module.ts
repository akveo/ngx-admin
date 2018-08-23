import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaInvestigacionComponent } from './linea_investigacion.component';
import { ListLineaInvestigacionComponent } from './list-linea_investigacion/list-linea_investigacion.component';
import { CrudLineaInvestigacionComponent } from './crud-linea_investigacion/crud-linea_investigacion.component';



const routes: Routes = [{
  path: '',
  component: LineaInvestigacionComponent,
  children: [{
    path: 'list-linea_investigacion',
    component: ListLineaInvestigacionComponent,
  }, {
    path: 'crud-linea_investigacion',
    component: CrudLineaInvestigacionComponent,
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

export class LineaInvestigacionRoutingModule { }

export const routedComponents = [
  LineaInvestigacionComponent,
  ListLineaInvestigacionComponent,
  CrudLineaInvestigacionComponent,
];
