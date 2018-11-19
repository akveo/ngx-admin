import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap.component';
import { ModalsComponent } from './modals/modals.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';


const routes: Routes = [{
  path: '',
  component: BootstrapComponent,
  children: [
    {
      path: 'inputs',
      component: FormInputsComponent,
    },
    {
      path: 'buttons',
      component: ButtonsComponent,
    },
    {
      path: 'modal',
      component: ModalsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BootstrapRoutingModule { }
