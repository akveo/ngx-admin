import {
  Component,
  OnDestroy,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

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
export class NgxCKEditorComponent {

}
