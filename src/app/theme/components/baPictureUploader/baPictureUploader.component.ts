import {Component, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer} from '@angular/core';
import { UploadOutput, UploadInput } from 'ngx-uploader';

@Component({
  selector: 'ba-picture-uploader',
  styleUrls: ['./baPictureUploader.scss'],
  templateUrl: './baPictureUploader.html',
})
export class BaPictureUploader {

  @Input() defaultPicture:string = '';
  @Input() picture:string = '';

  @Input() uploaderOptions = { url: '' };
  @Input() canDelete:boolean = true;

  @Output() onUpload = new EventEmitter<any>();
  @Output() onUploadCompleted = new EventEmitter<any>();

  @ViewChild('fileUpload') public _fileUpload:ElementRef;

  uploadInput: EventEmitter<UploadInput> = new EventEmitter<UploadInput>();
  public uploadInProgress:boolean;

  constructor(private renderer: Renderer) {
  }

  onUploadOutput(output: UploadOutput): void {
      if (output.type === 'allAddedToQueue') {
          let files = this._fileUpload.nativeElement.files;

          if (files.length) {
              const file = files[0];
              this._changePicture(file);

              if (this._canUploadOnServer()) {
                  this.uploadInProgress = true;
                  this.uploadInput.emit(jQuery.extend({
                      type: 'uploadAll',
                      method: 'POST',
                      concurrency: 1
                  }, this.uploaderOptions));
              }
          }
      } else if (output.type === 'done') {
          this.uploadInProgress = false;
          this.onUploadCompleted.emit(output);
      } else {
          this.onUpload.emit(output);
      }
  }

  bringFileSelector():boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  removePicture():boolean {
    this.picture = '';
    return false;
  }

  _changePicture(file:File):void {
    const reader = new FileReader();
    reader.addEventListener('load', (event:Event) => {
      this.picture = (<any> event.target).result;
    }, false);
    reader.readAsDataURL(file);
  }

  _canUploadOnServer():boolean {
    return !!this.uploaderOptions['url'];
  }
}
