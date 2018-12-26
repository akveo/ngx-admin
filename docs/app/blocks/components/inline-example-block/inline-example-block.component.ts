import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-inline-example-block',
  template: `
    <ngx-example-block *ngIf="isOneFile" [content]="content"></ngx-example-block>
    <ngx-tabbed-example-block *ngIf="isTabbed" [content]="content"></ngx-tabbed-example-block>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxInlineExampleBlockComponent {

  @Input() content;

  get isOneFile(): boolean {
    return !this.isTabbed;
  }

  get isTabbed(): boolean {
    return this.content.files.length > 1;
  }
}
