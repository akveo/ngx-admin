import { Component, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { UploadOutput, UploadInput } from 'ngx-uploader';
@Component({
  selector: 'ba-file-uploader',
  styleUrls: ['./baFileUploader.scss'],
  templateUrl: './baFileUploader.html',
})
export class BaFileUploader {
  @Input() fileUploaderOptions = { url: '' };
  @Output() onFileUpload = new EventEmitter<any>();
  @Output() onFileUploadCompleted = new EventEmitter<any>();
  @Input() defaultValue: string = '';

  @ViewChild('fileUpload') public _fileUpload: ElementRef;
  @ViewChild('inputText') public _inputText: ElementRef;

  uploadInput: EventEmitter<UploadInput> = new EventEmitter<UploadInput>();
  public uploadFileInProgress: boolean;
  constructor(private renderer: Renderer) { 
  }

  onUploadOutput(output: UploadOutput): void {
      if (output.type === 'allAddedToQueue') {
          let files = this._fileUpload.nativeElement.files;
          if (files.length) {
              const file = files[0];
              this._onChangeFileSelect(files[0])
              if (this._canFileUploadOnServer()) {
                  this.uploadFileInProgress = true;
                  this.uploadInput.emit(jQuery.extend({
                      type: 'uploadAll',
                      method: 'POST',
                      concurrency: 1
                  }, this.fileUploaderOptions));
              }
          }
      } else if (output.type === 'done') {
          this.uploadFileInProgress = false;
          this.onFileUploadCompleted.emit(output);
      } else {
          this.onFileUpload.emit(output);
      }
  }

  bringFileSelector(): boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  _onChangeFileSelect(file) {
    this._inputText.nativeElement.value = file.name
  }

  _canFileUploadOnServer(): boolean {
    return !!this.fileUploaderOptions['url'];
  }
}
