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
  step = 0;
  cambioTab = 0;

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

  nextTab() {
    this.cambioTab++;
  }

  onChange(event) {
    if (event) {
      if (this.step < 3) {
        this.nextStep();
      }else {
        this.step = 0;
        this.nextTab();
      }
    }
  }

  selectTab(event): void {
    if (event.tabTitle === this.translate.instant('GLOBAL.info_basica')) {
      this.cambioTab = 0;
    } else if (event.tabTitle === this.translate.instant('GLOBAL.hoja_vida')) {
      this.cambioTab = 1;
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
  }
}
