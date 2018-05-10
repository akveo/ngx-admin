import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscripcionComponent } from './inscripcion.component';
import { PosgradoComponent } from './posgrado/posgrado.component';

const routes: Routes = [{
  path: '',
  component: InscripcionComponent,
  children: [{
    path: 'posgrado',
    component: PosgradoComponent,
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

export class InscripcionRoutingModule { }

export const routedComponents = [
  InscripcionComponent,
  PosgradoComponent,
];
