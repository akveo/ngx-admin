import {Component} from '@angular/core';
import {CKEditor} from 'ng2-ckeditor';
import {BaCard} from '../../../../theme/components/baCard';

import './ckeditor.loader.ts';

@Component({
  selector: 'ckeditor',
  directives: [CKEditor, BaCard],
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
