import { Component, Input } from '@angular/core';
import { NbPopoverDirective, NbLayoutDirection, NbLayoutDirectionService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../../../@core/data/i18n.service';

@Component({
  selector: 'ngx-lang-switcher-list',
  templateUrl: './language-switcher-list.component.html',
  styleUrls: ['./language-switcher-list.component.scss'],
})

export class LangSwitcherListComponent {

  @Input() popover: NbPopoverDirective;
  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;

  languages = [];

  constructor(
    private translate: TranslateService,
    private i18nService: I18nService,
    private directionService: NbLayoutDirectionService) {

    this.translate.get(['English', 'Arabic']).subscribe(translations => {
      this.languages = [
        {
          title: translations.English,
          imgUrl: 'assets/flags/en.png',
          key: 'en',
        },
        {
          title: translations.Arabic,
          imgUrl: 'assets/flags/eg.png',
          key: 'ar',
        },
      ];
    });


    this.currentDirection = this.directionService.getDirection();
    this.directionService.onDirectionChange()
      .subscribe(newDirection => this.currentDirection = newDirection);
  }

  onToggleLang(langKey: string) {
    this.i18nService.language = langKey;
    this.popover.hide();
  }
}
