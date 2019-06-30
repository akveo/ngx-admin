import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { User } from '../../../../@core/data/users';

@Component({
  selector: 'ngx-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss'],
})
export class GeneralInformationComponent implements OnInit {

  @Input() user: User;
  file: File;
  originalProfilePic = true;
  class = 'hide-text';
  firstName: string;
  lastName: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  const names: string [] = this.user.name.split(' ');
  this.firstName = names[0];
  this.lastName = names[1];
  }

  getFilePath(e: any) {
    this.originalProfilePic = false;
    this.file = e.target.files[0];
  }

  get filePreview(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl((
      window.URL.createObjectURL(this.file)));
  }

  imageHover() {
    this.class = 'show-text';
  }

  imageLeave() {
    this.class = 'hide-text';
  }
}
