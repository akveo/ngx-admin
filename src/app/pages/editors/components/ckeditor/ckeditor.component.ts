import { Component, ViewEncapsulation } from '@angular/core';

import './ckeditor.loader.ts';

@Component({
  selector: 'ckeditor-component',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './ckeditor.html',
  styleUrls: ['./ckeditor.scss']
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
