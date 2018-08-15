import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
    path: 'dashboard',
    component: DashboardComponent,
    },
    {
    path: 'inscripcion',
    loadChildren: './inscripcion/inscripcion.module#InscripcionModule',
    },
    /**{
      path: 'publicaciones',
      loadChildren: './publicaciones/publicaciones.module#PublicacionesModule',
    },**/
    {
    path: 'genero',
    loadChildren: './genero/genero.module#GeneroModule',
    },
    {
    path: 'grupo_etnico',
    loadChildren: './grupo_etnico/grupo_etnico.module#GrupoEtnicoModule',
    },
    {
    path: 'estado_civil',
    loadChildren: './estado_civil/estado_civil.module#EstadoCivilModule',
    },
    {
    path: 'tipo_discapacidad',
    loadChildren: './tipo_discapacidad/tipo_discapacidad.module#TipoDiscapacidadModule',
    },
    {
    path: 'persona',
    loadChildren: './persona/persona.module#PersonaModule',
    },
    {
    path: 'tipo_lugar',
    loadChildren: './tipo_lugar/tipo_lugar.module#TipoLugarModule',
    },
    {
    path: 'lugar',
    loadChildren: './lugar/lugar.module#LugarModule',
    },
    {
    path: 'tipo_contacto',
    loadChildren: './tipo_contacto/tipo_contacto.module#TipoContactoModule',
    },
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

