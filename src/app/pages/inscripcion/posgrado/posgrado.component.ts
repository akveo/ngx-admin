import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ImplicitAutenticationService } from './../../../@core/utils/implicit_autentication.service';
import { PersonaService } from '../../../@core/data/persona.service';
import { UtilidadesService } from '../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-posgrado',
  templateUrl: './posgrado.component.html',
  styleUrls: ['./posgrado.component.scss'],
  })
export class PosgradoComponent implements OnInit {

  info_persona_id: number;
  info_ente_id: number;
  info_info_persona: any;
  step = 0;
  cambioTab = 0;
  nForms: number;
  percentage: any;
  percentageTab = [];
  show_info = false;
  show_profile = false;
  show_acad = false;
  show_expe = false;
  info_contacto: boolean;
  info_persona: boolean;
  info_caracteristica: boolean;

  constructor(
    private autenticacion: ImplicitAutenticationService,
    private personaService: PersonaService,
    private translate: TranslateService) {
    this.translate = translate;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    });
    this.percentage = 0;
    this.nForms = 8;
    this.getInfoPersonaId();
  }

  setPercentage(number, tab) {
    console.info(number);
    this.percentageTab[tab] = (number * 100) / this.nForms;
    console.info(this.percentageTab);
    this.percentage = Math.round(UtilidadesService.getSumArray(this.percentageTab));
  }

  traerInfoPersona(event) {
    this.setPercentage(event.percentage, 0);
  }

  traerInfoCaracteristica(event) {
    this.setPercentage(event.percentage, 1);
  }

  traerInfoContacto(event) {
    this.setPercentage(event.percentage, 2);
  }

  traerInfoIdiomas(event) {
    this.setPercentage(event.percentage, 4);
  }

  getInfoPersonaId() {
    interface ResponseId {
      Id: number;
      Ente: number;
    }
    if (this.autenticacion.live()) {
      this.personaService.get('persona/?query=Usuario:' + this.autenticacion.getPayload().sub)
        .subscribe(res => {
          if (res !== null) {
            this.info_info_persona = <ResponseId>res[0];
            this.info_persona_id = this.info_info_persona.Id;
            this.info_ente_id = this.info_info_persona.Ente;
          }
        });
    } else  {
      this.info_persona_id = undefined;
      this.info_ente_id = undefined;
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  nextTab() {
    this.step = 0;
    this.cambioTab++;
  }

  onChange(event) {
    if (event) {
      if (this.cambioTab === 0 && this.step < 3) {
        this.nextStep();
      }else if (this.cambioTab === 1 && this.step < 4) {
        this.nextStep();
      }else {
        this.nextTab();
      }
    }
  }

  perfil_editar(event): void {
    switch (event) {
      case 'info_contacto':
        this.show_info = true;
        this.show_profile = false;
        this.show_acad = false;
        this.show_expe = false;
        this.info_contacto = true;
        this.info_caracteristica = false;
        this.info_persona = false;
        break;
      case 'info_caracteristica':
        this.show_info = true;
        this.show_profile = false;
        this.show_acad = false;
        this.show_expe = false;
        this.info_contacto = false;
        this.info_caracteristica = true;
        this.info_persona = false;
        break;
      case 'info_persona':
        this.show_info = true;
        this.show_profile = false;
        this.show_acad = false;
        this.show_expe = false;
        this.info_contacto = false;
        this.info_caracteristica = false;
        this.info_persona = true;
        break;
      default:
        break;
    }
  }

  selectTab(event): void {
    if (event.tabTitle === this.translate.instant('GLOBAL.info_basica')) {
      this.step = 0;
      this.cambioTab = 0;
    } else if (event.tabTitle === this.translate.instant('GLOBAL.hoja_vida')) {
      this.step = 0;
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
