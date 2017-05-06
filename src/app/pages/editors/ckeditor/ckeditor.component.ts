import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-ckeditor',
  template: `
    <nga-card>
      <nga-card-body>
        <ckeditor [config]="{extraPlugins: 'divarea'}"></ckeditor>
      </nga-card-body>
    </nga-card>
  `,
})
export class CKEditorComponent {
}
