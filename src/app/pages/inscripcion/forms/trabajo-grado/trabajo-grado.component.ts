import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-trabajo-grado',
  templateUrl: './trabajo-grado.component.html',
  styleUrls: ['./trabajo-grado.component.scss'],
})
export class TrabajoGradoComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate = translate;
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
  }
}
