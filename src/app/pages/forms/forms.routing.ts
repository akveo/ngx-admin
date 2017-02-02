import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { LayoutsComponent } from './components/layouts/layouts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      { path: 'inputs', component: InputsComponent },
      { path: 'layouts', component: LayoutsComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
