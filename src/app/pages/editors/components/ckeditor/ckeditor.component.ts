import { Component, ViewEncapsulation } from '@angular/core';
import {CKEditor} from 'ng2-ckeditor';

import './ckeditor.loader.ts';

@Component({
  selector: 'ckeditor-component',
  encapsulation: ViewEncapsulation.None,
  directives: [CKEditor],
  template: require('./ckeditor.html'),
  styles: [require('./ckeditor.scss')]
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
