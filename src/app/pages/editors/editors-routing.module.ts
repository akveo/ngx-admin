import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxEditorsComponent } from './editors.component';
import { NgxTinyMCEComponent, NgxTinyMCEEditorComponent } from './tinyMCE.component';

const routes: Routes = [
  {
    path: '',
    component: NgxEditorsComponent,
    children: [
      {
        path: 'tinymce',
        component: NgxTinyMCEComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxEditorsRoutingModule { }

export const routedComponents = [NgxEditorsComponent, NgxTinyMCEComponent, NgxTinyMCEEditorComponent];
