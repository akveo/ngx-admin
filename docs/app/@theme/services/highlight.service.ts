import { Injectable } from '@angular/core';
import * as hljs from 'highlight.js';

@Injectable()
export class NgxHighlightService {

  public highlight(code: string): string {
    return hljs.highlightAuto(code, ['ts', 'html', 'scss', 'nginx']).value;
  }
}
