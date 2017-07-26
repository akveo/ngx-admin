import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-ckeditor',
  template: `
    <nga-card size="xlarge">
      <nga-card-body>
        <ckeditor [config]="{ extraPlugins: 'divarea', height: '515' }"></ckeditor>
      </nga-card-body>
    </nga-card>
  `,
})
export class CKEditorComponent {
}
