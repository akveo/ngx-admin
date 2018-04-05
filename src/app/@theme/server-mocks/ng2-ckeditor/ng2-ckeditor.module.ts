import { NgModule } from '@angular/core';

import { CkeditorComponent } from './ckeditor.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  imports: [ LoaderModule ],
  declarations: [ CkeditorComponent ],
  exports: [ CkeditorComponent ],
})
export class CKEditorModule {}
