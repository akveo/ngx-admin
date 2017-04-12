import { Component, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
@Component({
  selector: 'ba-file-uploader',
  styleUrls: ['./baFileUploader.scss'],
  templateUrl: './baFileUploader.html',
})
export class BaFileUploader {
  @Input() fileUploaderOptions: NgUploaderOptions = { url: '' };
  @Output() onFileUpload = new EventEmitter<any>();
  @Output() onFileUploadCompleted = new EventEmitter<any>();
  @Input() defaultValue: string = '';

  @ViewChild('fileUpload') public _fileUpload: ElementRef;
  @ViewChild('inputText') public _inputText: ElementRef;

  public uploadFileInProgress: boolean;
  constructor(private renderer: Renderer) { 
  }

  bringFileSelector(): boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  beforeFileUpload(uploadingFile): void {
    let files = this._fileUpload.nativeElement.files;
    if (files.length) {
      const file = files[0];
      this._onChangeFileSelect(files[0])
      if (!this._canFleUploadOnServer()) {
        uploadingFile.setAbort();
      } else {
        this.uploadFileInProgress = true;
      }
    }
  }

  _onChangeFileSelect(file) {
    this._inputText.nativeElement.value = file.name
  }

  _onFileUpload(data): void {
    if (data['done'] || data['abort'] || data['error']) {
      this._onFileUploadCompleted(data);
    } else {
      this.onFileUpload.emit(data);
    }
  }

  _onFileUploadCompleted(data): void {
    this.uploadFileInProgress = false;
    this.onFileUploadCompleted.emit(data);
  }

  _canFleUploadOnServer(): boolean {
    return !!this.fileUploaderOptions['url'];
  }
}
