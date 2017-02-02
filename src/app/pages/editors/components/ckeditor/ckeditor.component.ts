import { Component, OnInit } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';
import 'style-loader!./ckeditor.component.scss';

@Component({
  selector: 'ckeditor-component',
  templateUrl: './ckeditor.component.html',
})
export class CkeditorComponent implements OnInit {

  ckeditorContent: string;
  config: any;

  constructor() { }

  ngOnInit(): void {
    this.ckeditorContent = '<p>Hello CKEditor</p>';
    this.config = {
      uiColor: '#F0F3F4',
      height: '600',
    };
  }
}
