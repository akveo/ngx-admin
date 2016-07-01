import {Component, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer} from '@angular/core';
import {Ng2Uploader} from 'ng2-uploader/ng2-uploader';

@Component({
  selector: 'ba-picture-uploader',
  styles: [require('./baPictureUploader.scss')],
  template: require('./baPictureUploader.html'),
  providers: [Ng2Uploader]
})
export class BaPictureUploader {

  @Input() defaultPicture:string = '';
  @Input() picture:string = '';

  @Input() uploaderOptions:any = {};
  @Input() canDelete:boolean = true;

  onUpload:EventEmitter<any> = new EventEmitter();
  onUploadCompleted:EventEmitter<any> = new EventEmitter();

  @ViewChild('fileUpload') protected _fileUpload:ElementRef;

  public uploadInProgress:boolean = false;

  constructor(private renderer:Renderer, protected _uploader:Ng2Uploader) {
  }

  public ngOnInit():void {
    if (this._canUploadOnServer()) {
      setTimeout(() => {
        this._uploader.setOptions(this.uploaderOptions);
      });

      this._uploader._emitter.subscribe((data) => {
        this._onUpload(data);
      });
    } else {
      console.warn('Please specify url parameter to be able to upload the file on the back-end');
    }
  }

  public onFiles():void {
    let files = this._fileUpload.nativeElement.files;

    if (files.length) {
      const file = files[0];
      this._changePicture(file);

      if (this._canUploadOnServer()) {
        this.uploadInProgress = true;
        this._uploader.addFilesToQueue(files);
      }
    }
  }

  public bringFileSelector():boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  public removePicture():boolean {
    this.picture = '';
    return false;
  }

  protected _changePicture(file:File):void {
    const reader = new FileReader();
    reader.addEventListener('load', (event:Event) => {
      this.picture = (<any> event.target).result;
    }, false);
    reader.readAsDataURL(file);
  }

  protected _onUpload(data):void {
    if (data['done'] || data['abort'] || data['error']) {
      this._onUploadCompleted(data);
    } else {
      this.onUpload.emit(data);
    }
  }

  protected _onUploadCompleted(data):void {
    this.uploadInProgress = false;
    this.onUploadCompleted.emit(data);
  }

  protected _canUploadOnServer():boolean {
    return !!this.uploaderOptions['url'];
  }
}
