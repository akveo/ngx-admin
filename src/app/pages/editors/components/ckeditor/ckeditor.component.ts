import {Component} from '@angular/core';
import {CKEditor} from 'ng2-ckeditor';

import './ckeditor.loader.ts';

@Component({
  selector: 'ckeditor-component',
  directives: [CKEditor],
  template: require('./ckeditor.html')
})

export class Ckeditor {
  public ckeditorContent:string = '<p>Hello CKEditor</p>';
  public config = {
    uiColor: '#F0F3F4',
    height: '600'
  };

  constructor() {
  }
}
