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
    path: 'titulacion',
    loadChildren: './titulacion/titulacion.module#TitulacionModule',
    },
    {
    path: 'nivel_formacion',
    loadChildren: './nivel_formacion/nivel_formacion.module#NivelFormacionModule',
    },
    {
    path: 'metodologia',
    loadChildren: './metodologia/metodologia.module#MetodologiaModule',
    },
    {
    path: 'programa_academico',
    loadChildren: './programa_academico/programa_academico.module#ProgramaAcademicoModule',
    },
    {
    path: 'enfasis',
    loadChildren: './enfasis/enfasis.module#EnfasisModule',
    },
    {
    path: 'estado_admision',
    loadChildren: './estado_admision/estado_admision.module#EstadoAdmisionModule',
    },
    {
    path: 'linea_investigacion',
    loadChildren: './linea_investigacion/linea_investigacion.module#LineaInvestigacionModule',
    },
    {
    path: 'admision',
    loadChildren: './admision/admision.module#AdmisionModule',
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

