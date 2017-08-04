import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { ThemeModule } from '../../@theme/theme.module';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    EditorsRoutingModule,
    CKEditorModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class EditorsModule { }
