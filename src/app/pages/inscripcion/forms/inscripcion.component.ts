import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-mockup-inscripcion',
  styleUrls: ['./inscripcion.component.scss'],
  templateUrl: './inscripcion.component.html',
})
export class InscripcionComponent {
  constructor(private translate: TranslateService) {
    this.translate = translate;
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
