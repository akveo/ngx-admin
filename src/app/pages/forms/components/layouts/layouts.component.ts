import { Component, OnInit } from '@angular/core';

import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.component.html'
})
export class LayoutsComponent implements OnInit {

  defaultPicture: string;
  profile: any;
  uploaderOptions: NgUploaderOptions;

  constructor() { }

  ngOnInit(): void {
    this.defaultPicture = 'assets/img/theme/no-photo.png';
    this.profile = {
      picture: 'assets/img/app/profile/Nasta.png'
    };
    this.uploaderOptions = {
      // url: 'http://website.com/upload'
      url: '',
    };
  }

}
