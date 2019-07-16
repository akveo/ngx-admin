import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { NgxCodeLoaderService } from '../../../@theme/services/code-loader.service';

@Component({
  selector: 'ngx-example-block',
  template: `
    <ngx-code-block *ngIf="code"
      [firstLine]="firstLine"
      [lastLine]="lastLine"
      [code]="code">
    </ngx-code-block>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxExampleBlockComponent {

  code: string;
  firstLine: number;
  lastLine: number;

  @Input('content')
  set setContent(content) {
    this.loadCode(content);
  }

  constructor(private codeLoader: NgxCodeLoaderService, private cd: ChangeDetectorRef) {
  }

  loadCode(content) {
    this.codeLoader.load(content.files[0])
      .subscribe((code: string) => {
        this.code = code;
        this.firstLine = content.firstLine || 1;
        this.lastLine = content.lastLine || code.split('\n').length;
        this.cd.detectChanges();
      });
  }
}
