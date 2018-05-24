import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ImplicitAutenticationService } from './../../../@core/utils/implicit_autentication.service';
import { MidPersonaService } from '../../../@core/data/mid_persona.service';

@Component({
  selector: 'ngx-posgrado',
  templateUrl: './posgrado.component.html',
  styleUrls: ['./posgrado.component.scss'],
  })
export class PosgradoComponent implements OnInit {

  cambiotab: boolean = false;
  info_persona_id: any;
  info_info_persona: any;

  constructor(
    private autenticacion: ImplicitAutenticationService,
    private midPersonaService: MidPersonaService,
    private translate: TranslateService) {
    this.translate = translate;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    });
    this.getInfoPersonaId();
  }

  getInfoPersonaId() {
    interface ResponseId {
      Id: number;
    }
    if (this.autenticacion.live()) {
      this.midPersonaService.get('persona/consultapersona/' + this.autenticacion.getPayload().sub)
        .subscribe(res => {
          if (res !== null) {
            this.info_info_persona = <ResponseId>res;
            this.info_persona_id = this.info_info_persona.Id;
          }
        });
    } else  {
      this.info_persona_id = undefined;
    }
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
