import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-ckeditor',
  template: `
    <nb-card size="xlarge">
      <nb-card-body>
        <ckeditor [config]="{ extraPlugins: 'divarea', height: '515' }"></ckeditor>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent {
}
