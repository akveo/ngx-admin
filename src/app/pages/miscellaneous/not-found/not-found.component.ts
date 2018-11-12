import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  constructor(private translate: TranslateService, private menuService: NbMenuService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
