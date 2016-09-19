import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'layouts',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./layouts.html'),
})
export class Layouts {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:any = {
    // url: 'http://website.com/upload'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
