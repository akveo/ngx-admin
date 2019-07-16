import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { NgxHighlightService } from '../../../@theme/services/highlight.service';

@Component({
  selector: 'ngx-code-block',
  styleUrls: ['./code-block.component.scss'],
  template: `
    <div class="container">
      <div class="lines">
        <span *ngFor="let line of lines">{{ line }}</span>
      </div>
      <pre><code class="hljs" [innerHTML]="code"></code></pre>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxCodeBlockComponent {

  @Input() path = '';
  @Input() firstLine: number;
  @Input() lastLine: number;

  @Input('code')
  set rawCode(value) {
    const highlighted = this.highlightService.highlight(value);
    this.code = this.getVisible(highlighted);
    this.lines = this.createLines(this.code);
  }

  code: SafeHtml;
  lines: number[] = [];

  constructor(private highlightService: NgxHighlightService) {
  }

  getVisible(code): string {
    return code
      .split('\n')
      .slice(this.firstLine - 1, this.lastLine)
      .join('\n');
  }

  createLines(code): number[] {
    const length = code.split('\n').length;
    return Array(length).fill(0).map((_, i) => i + (this.firstLine || 1));
  }
}
