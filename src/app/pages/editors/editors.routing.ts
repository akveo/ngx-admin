import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorsComponent } from './editors.component';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: EditorsComponent,
    children: [
      { path: 'ckeditor', component: CkeditorComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
