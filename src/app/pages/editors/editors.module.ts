import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { NgxSharedModule } from '../../@shared/shared.module';

import { NgxEditorsRoutingModule, routedComponents } from './editors-routing.module';

@NgModule({
  imports: [
    NgxSharedModule,
    NgxEditorsRoutingModule,
    CKEditorModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class NgxEditorsModule { }
