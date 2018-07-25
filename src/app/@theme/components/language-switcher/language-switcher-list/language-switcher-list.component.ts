import { Component, Input } from '@angular/core';
import { NbPopoverDirective, NbLayoutDirection, NbLayoutDirectionService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService, private directionService: NbLayoutDirectionService) {

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
    })


    this.currentDirection = this.directionService.getDirection();
    this.directionService.onDirectionChange()
      .subscribe(newDirection => this.currentDirection = newDirection);
  }

  // TODO: Need to convert onToggleLang to more generic function
  onToggleLang(langKey: string) {
    if (langKey === 'ar') {
      this.translate.use('ar');
      this.directionService.setDirection(this.directions.RTL);
    } else {
      this.translate.use('en');
      this.directionService.setDirection(this.directions.LTR);
    }
    this.popover.hide();
  }
}