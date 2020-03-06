import {NgModule} from '@angular/core';
import {NbCardModule} from '@nebular/theme';

import {ThemeModule} from '../../@theme/theme.module';

import {EditorsRoutingModule, routedComponents} from './editors-routing.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    EditorsRoutingModule,
    CKEditorModule,
    CKEditorModule,
    EditorModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class EditorsModule {
}
