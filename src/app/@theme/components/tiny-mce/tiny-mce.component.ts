import { Component, OnDestroy, AfterViewInit, Output, EventEmitter, ElementRef } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'ngx-tiny-mce',
  template: '',
})
export class TinyMCEComponent implements OnDestroy, AfterViewInit {

  @Output() editorKeyup = new EventEmitter<any>();

  editor: any;

  constructor(private host: ElementRef,
              private http: HttpClient,
              ) { }

  ngAfterViewInit() {
    const self = this;
    tinymce.init({
      target: this.host.nativeElement,
      plugins: ['link', 'paste', 'table', 'image'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          this.editorKeyup.emit(editor.getContent());
        });
      },
      height: '320',
      // Images Local Upload
      images_upload_handler: function(blobInfo, success, failure) {
        let formData;
        formData = new FormData();
        // console.log(blobInfo);
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        // console.log(formData);
        self.uploadFile('http://wl.cs/admin/upload/upload', formData).subscribe( response => {
          // console.log('图片上传结果')
          // console.log(response)
          if (response && response['data'] && response['data']['path']) {
            const url = response['data']['path'];
            // get the image url from serve api response， and use in next ...
            success(url);
          } else {
            if (response && response['msg']) {
              failure(response['msg']);
            } else {
              failure('Upload error');
            }
          }
        });
      }
    });
  }
// Upload Images http handle
  private uploadFile(url: string, formData: any) {
    const self = this;
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    return self.http.post(url, formData, { headers: headers });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
