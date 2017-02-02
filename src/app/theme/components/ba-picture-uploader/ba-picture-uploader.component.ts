import { Component, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild } from '@angular/core';

import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'ba-picture-uploader',
  styleUrls: ['./ba-picture-uploader.component.scss'],
  templateUrl:  './ba-picture-uploader.component.html'
})
export class BaPictureUploader {

  @Input() defaultPicture: string = '';
  @Input() picture: string = '';

  @Input() uploaderOptions: NgUploaderOptions = { url: '' };
  @Input() canDelete: boolean = true;

  @Output() onUpload = new EventEmitter<any>();
  @Output() onUploadCompleted = new EventEmitter<any>();

  @ViewChild('fileUpload') public _fileUpload: ElementRef;

  public uploadInProgress: boolean;

  constructor(private renderer: Renderer) { }

  beforeUpload(uploadingFile): void {
    const files: Array<any> = this._fileUpload.nativeElement.files;

    if (files.length > 0) {
      const file: any = files[0];
      this._changePicture(file);

      if (!this._canUploadOnServer()) {
        uploadingFile.setAbort();
      } else {
        this.uploadInProgress = true;
      }
    }
  }

  bringFileSelector(): boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  removePicture(): boolean {
    this.picture = '';
    return false;
  }

  _changePicture(file: File): void {
    const reader = new FileReader();
    reader.addEventListener('load', (event: Event) => {
      this.picture = (<any> event.target).result;
    }, false);
    reader.readAsDataURL(file);
  }

  _onUpload(data): void {
    if (data['done'] || data['abort'] || data['error']) {
      this._onUploadCompleted(data);
    } else {
      this.onUpload.emit(data);
    }
  }

  _onUploadCompleted(data): void {
    this.uploadInProgress = false;
    this.onUploadCompleted.emit(data);
  }

  _canUploadOnServer(): boolean {
    return !!this.uploaderOptions['url'];
  }
}
