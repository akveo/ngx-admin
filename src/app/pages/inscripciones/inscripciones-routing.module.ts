import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscripcionesComponent } from './inscripciones.component';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { InfoBasicaComponent } from './info-basica/info-basica.component';
import { IdiomasComponent } from './posgrado/idiomas/idiomas.component';

const routes: Routes = [{
    path: '',
    component: InscripcionesComponent,
    children: [{
        path: 'posgrado',
        component: PosgradoComponent,
        children: [{
            path: '',
            redirectTo: 'idiomas',
            pathMatch: 'full',
        }, {
            path: 'idiomas',
            component: IdiomasComponent,
        }],
    },
    {
        path: 'info-basica',
        component: InfoBasicaComponent,
        children: [],
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
export class InscripcionesRoutingModule {

}

export const routedComponents = [
    InscripcionesComponent,
    PosgradoComponent,
    InfoBasicaComponent,
];

