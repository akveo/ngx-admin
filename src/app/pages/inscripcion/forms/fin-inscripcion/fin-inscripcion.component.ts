import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-fin-inscripcion',
  templateUrl: './fin-inscripcion.component.html',
  styleUrls: ['./fin-inscripcion.component.scss'],
})
export class FinInscripcionComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate = translate;
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
  }
}
