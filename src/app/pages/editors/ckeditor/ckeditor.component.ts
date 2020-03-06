import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'ngx-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls : ['./ckeditor.component.scss'],
})
export class CKEditorComponent {
  public Editor = ClassicEditor;
}
