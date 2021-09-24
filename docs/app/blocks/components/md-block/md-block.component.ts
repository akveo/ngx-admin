/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ngx-md-block',
  template: `
    <nb-card *ngFor="let section of content;" [ngxFragment]="section.fragment">
      <nb-card-body>
        <div [innerHtml]="getTemplate(section.html)"></div>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMdBLockComponent {
  @Input() content: MdChildren[] = [];

  constructor(private readonly domSanitizer: DomSanitizer) {
  }

  // TODO: create NbDOMPurifyPipe
  getTemplate(content: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(content);
  }
}

interface MdChildren {
  fragment: string;
  html: string;
  source: string;
  title: string;
}
