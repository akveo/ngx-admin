import {Component} from '@angular/core';
import {CKEditor} from 'ng2-ckeditor';
import {BaCard} from "../../../../theme/components/baCard/baCard.component";

import './ckeditor.loader.ts';

@Component({
  selector: 'ckeditor',
  directives: [CKEditor, BaCard],
  template: require('./ckeditor.html')
})

export class Ckeditor {
  private ckeditorContent;
  private config;
  
  constructor() {
    this.ckeditorContent = `<p>Hello CKEditor</p>`;
    this.config = {uiColor: '#F0F3F4', height: '600'};
  }
}
