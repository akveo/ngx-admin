import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscripcionesComponent} from './inscripciones.component'
import { PosgradoComponent } from './posgrado/posgrado.component';
const routes: Routes = [{
    path: '',
    component: InscripcionesComponent,
    children: [
        {
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

export class InscripcionesRoutingModule {

}

export const routedComponents = [];
