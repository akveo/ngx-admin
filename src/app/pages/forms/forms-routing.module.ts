import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxFormsComponent } from './forms.component';
import { NgxFormInputsComponent } from './form-inputs/form-inputs.component';
import { NgxFormLayoutsComponent } from './form-layouts/form-layouts.component';

const routes: Routes = [{
  path: '',
  component: NgxFormsComponent,
  children: [{
    path: 'inputs',
    component: NgxFormInputsComponent,
  }, {
    path: 'layouts',
    component: NgxFormLayoutsComponent,
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
export class NgxFormsRoutingModule {

}

export const routedComponents = [
  NgxFormsComponent,
  NgxFormInputsComponent,
  NgxFormLayoutsComponent,
];
