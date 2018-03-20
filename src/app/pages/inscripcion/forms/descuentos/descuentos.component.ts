import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.scss'],
})
export class DescuentosComponent  implements OnInit {
    constructor(private translate: TranslateService) {
      this.translate = translate;
    }
    useLanguage(language: string) {
      this.translate.use(language);
    }
    ngOnInit() {
    }
}
