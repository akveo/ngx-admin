import {Component, Input} from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';

@Component({
  selector: 'ngx-lang-switcher-list',
  template: `
    <ul class="themes-switcher-list">
      <li class="themes-switcher-item"
          *ngFor="let lang of languages"
          (click)="onToggleLang(lang.key)">
        <!-- <i class="nb-drop" [ngClass]="'drop-icon-' + lang.key"></i> -->
        <span>{{ lang.title }}</span>
      </li>
    </ul>
  `,
  styleUrls: ['./language-switcher-list.component.scss'],
})
export class LangSwitcherListComponent {

  @Input() popover: NbPopoverDirective;

  languages = [
    {
      title: 'English',
      key: 'en',
    },
    {
      title: 'Arabic',
      key: 'ar',
    },
    {
      title: 'Russian',
      key: 'ru',
    },
  ];

  constructor() {}

  onToggleLang(langKey: string) {
    // TODO: get language key and do change language
    this.popover.hide();
  }
}
