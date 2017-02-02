import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './editors.routing';
import { EditorsComponent } from './editors.component';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    EditorsComponent,
    CkeditorComponent
  ]
})
export class EditorsModule { }
