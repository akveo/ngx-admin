import { Component, Input, ViewChild } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';

import { LangSwitcherListComponent } from './language-switcher-list/language-switcher-list.component';

@Component({
  selector: 'ngx-lang-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LangSwitcherComponent {
  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;

  @Input() showTitle: boolean = true;

  switcherListComponent = LangSwitcherListComponent;
}
