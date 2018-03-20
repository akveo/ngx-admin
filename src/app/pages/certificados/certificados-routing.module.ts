import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificadosComponent } from './certificados.component';
import { PruebaQrComponent } from './prueba-qr/prueba-qr.component';

const routes: Routes = [{
    path: '',
    component: CertificadosComponent,
    children: [{
        path: 'prueba-qr',
        component: PruebaQrComponent,
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
export class CertificadosRoutingModule {

}

export const routedComponents = [
    CertificadosComponent,
];
