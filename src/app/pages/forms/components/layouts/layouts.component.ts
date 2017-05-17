import {Component} from '@angular/core';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.html',
})
export class Layouts {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  
  constructor() {
  }

  ngOnInit() {
  }
}
