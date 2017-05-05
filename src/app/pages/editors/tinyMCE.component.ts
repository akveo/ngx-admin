import { Component, OnDestroy, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-tinymce-editor',
  template: `
    <textarea id="{{ elementId }}"></textarea>
  `,
})
export class NgxTinyMCEEditorComponent implements OnDestroy, AfterViewInit {

  @Input() elementId: string;

  @Output() editorKeyup = new EventEmitter<any>();

  editor: any;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;

        editor.on('keyup', () => {
          const content = editor.getContent();

          this.editorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}

@Component({
  selector: 'ngx-tinymce',
  template: `
    <nga-card>
      <nga-card-body>
        <ngx-tinymce-editor elementId="tinymceEditor" (editorKeyup)="editorKeyupHandler($event)"></ngx-tinymce-editor>
      </nga-card-body>
    </nga-card>
  `,
})
export class NgxTinyMCEComponent {

  editorKeyupHandler($event) {
    console.info($event);
  }

}
