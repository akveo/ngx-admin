import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'ngx-posgrado',
  templateUrl: './posgrado.component.html',
  styleUrls: ['./posgrado.component.scss'],
  })
export class PosgradoComponent implements OnInit {

  cambiotab: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate = translate;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  activetab(): void {
    this.cambiotab = !this.cambiotab;
  }

  selectTab(event): void {
    if (event.tabTitle === 'Lista') {
      this.cambiotab = false;
    } else {
      this.cambiotab = true;
    }
  }

  onChange(event) {
    if (event) {
      this.cambiotab = !this.cambiotab;
    }
  }

  ngOnInit() {
  }
}
