import {
  Component,
  OnDestroy,
  AfterViewInit,
  Output,
  EventEmitter,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'ngx-tiny-mce',
  template: '',
})
export class TinyMCEComponent implements OnDestroy, AfterViewInit {

  @Output() editorKeyup = new EventEmitter<any>();

  editor: any;
  isServer: boolean;

  constructor(
    private host: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {

    this.isServer = isPlatformServer(platformId);
  }

  ngAfterViewInit() {
    if (this.isServer) {
      return;
    }

    tinymce.init({
      target: this.host.nativeElement,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          this.editorKeyup.emit(editor.getContent());
        });
      },
      height: '320',
    });
  }

  ngOnDestroy() {
    if (this.isServer) {
      return;
    }

    tinymce.remove(this.editor);
  }
}
