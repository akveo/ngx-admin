import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MockupComponent } from './mockup.component';
import { InscripcionComponent } from './forms/inscripcion.component';
import { DatosBasicosComponent } from './forms/datos-basicos/datos-basicos.component';
import { DescuentosComponent } from './forms/descuentos/descuentos.component';
import { DocumentosComponent } from './forms/documentos/documentos.component';
import { FinInscripcionComponent } from './forms/fin-inscripcion/fin-inscripcion.component';
import { FormacionAcademicaComponent } from './forms/formacion-academica/formacion-academica.component';
import { FormacionLaboralComponent } from './forms/formacion-laboral/formacion-laboral.component';
import { IdiomaComponent } from './forms/idioma/idioma.component';
import { TrabajoGradoComponent } from './forms/trabajo-grado/trabajo-grado.component';
import { RegistroComponent } from './registro/registro.component';
import { VerAspirantesComponent } from './ver-aspirantes/ver-aspirantes.component';
import { EstadoInscripcionesComponent } from './estado-inscripciones/estado-inscripciones.component';

const routes: Routes = [{
    path: '',
    component: MockupComponent,
    children: [{
        path: 'forms',
        component: InscripcionComponent,
        children: [{
            path: 'datos-basicos',
            component: DatosBasicosComponent,
        }, {
            path: 'descuentos',
            component: DescuentosComponent,
        }, {
            path: 'documentos',
            component: DocumentosComponent,
        }, {
            path: 'fin-inscripcion',
            component: FinInscripcionComponent,
        }, {
            path: 'formacion-academica',
            component: FormacionAcademicaComponent,
        }, {
            path: 'formacion-laboral',
            component: FormacionLaboralComponent,
        }, {
            path: 'idioma',
            component: IdiomaComponent,
        }, {
            path: 'trabajo-grado',
            component: TrabajoGradoComponent,
        }],
    }, {
        path: 'registro',
        component: RegistroComponent,
    }, {
        path: 'ver-aspirantes',
        component: VerAspirantesComponent,
    }, {
        path: 'estado-inscripciones',
        component: EstadoInscripcionesComponent,
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
export class MockupRoutingModule {

}

export const routedComponents = [
    MockupComponent,
    InscripcionComponent,
    DatosBasicosComponent,
    DescuentosComponent,
    DocumentosComponent,
    FinInscripcionComponent,
    FormacionAcademicaComponent,
    FormacionLaboralComponent,
    IdiomaComponent,
    TrabajoGradoComponent,
    RegistroComponent,
    VerAspirantesComponent,
    EstadoInscripcionesComponent,
];
