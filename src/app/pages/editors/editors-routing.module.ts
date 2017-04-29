import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxEditorsComponent } from './editors.component';
import { NgxTinyMCEComponent, NgxTinyMCEEditorComponent } from './tinyMCE.component';
import { NgxCKEditorComponent } from './ckeditor.component';

const routes: Routes = [
  {
    path: '',
    component: NgxEditorsComponent,
    children: [
      {
        path: 'tinymce',
        component: NgxTinyMCEComponent,
      },
      {
        path: 'ckeditor',
        component: NgxCKEditorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxEditorsRoutingModule { }

export const routedComponents = [
  NgxEditorsComponent,
  NgxTinyMCEComponent,
  NgxTinyMCEEditorComponent,
  NgxCKEditorComponent,
];
