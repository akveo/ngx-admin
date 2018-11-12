import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscripcionComponent } from './inscripcion.component';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { PerfilComponent } from './perfil/perfil.component';
<<<<<<< HEAD
import { AuthGuard } from '../../@core/_guards/auth.guard';
=======
// import { AuthGuard } from '../../@core/_guards/auth.guard';
>>>>>>> 0791db2517800ddf7e3a127fa552d5bebc117c4e

const routes: Routes = [{
  path: '',
  component: InscripcionComponent,
  children: [{
    path: 'posgrado',
    component: PosgradoComponent,
<<<<<<< HEAD
    canActivate: [AuthGuard],
=======
    // canActivate: [AuthGuard],
>>>>>>> 0791db2517800ddf7e3a127fa552d5bebc117c4e
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
  PerfilComponent,
];
