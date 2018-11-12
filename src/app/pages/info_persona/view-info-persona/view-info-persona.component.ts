import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CampusMidService } from '../../../@core/data/campus_mid.service';
import { InfoPersona } from '../../../@core/data/models/info_persona';
import { NuxeoService } from '../../../@core/utils/nuxeo.service';
import { DocumentoService } from '../../../@core/data/documento.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-view-info-persona',
  templateUrl: './view-info-persona.component.html',
  styleUrls: ['./view-info-persona.component.scss'],
})
export class ViewInfoPersonaComponent implements OnInit {

  info_persona_id: number;
  info_info_persona: InfoPersona;
  info_persona_user: string;
  foto: any;

  @Input('info_persona_id')
  set name(info_persona_id: number) {
    this.info_persona_id = info_persona_id;
    this.loadInfoPersona();
  }

  @Output('url_editar') url_editar: EventEmitter<boolean> = new EventEmitter();

  constructor(private campusMidService: CampusMidService,
    private documentoService: DocumentoService,
    private sanitization: DomSanitizer,
    private nuxeoService: NuxeoService,
    private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    });
    this.loadInfoPersona();
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  public editar(): void {
    this.url_editar.emit(true);
  }

  public cleanURL(oldURL: string): SafeResourceUrl {
    return this.sanitization.bypassSecurityTrustUrl(oldURL);
  }

  ngOnInit() {
  }

  public loadInfoPersona(): void {
    const id = this.info_persona_id ? this.info_persona_id : this.info_persona_user ? this.info_persona_user : undefined;
    if (id !== undefined && id !== 0 && id.toString() !== '') {
      this.campusMidService.get('persona/ConsultaPersona/?id=' + id)
        .subscribe(res => {
          const r = <any>res;
          if (r !== null && r.Type !== 'error') {
            this.info_info_persona = <InfoPersona>res;
            const foto = [];
            foto.push({Id: this.info_info_persona.Foto, key: 'Foto'});
            this.nuxeoService.getDocumentoById$(foto, this.documentoService)
              .subscribe(response => {
                this.foto = this.cleanURL(response['Foto'] + '');
              });
          } else {
            this.info_info_persona = undefined;
          }
        },
        (error: HttpErrorResponse) => {
          Swal({
            type: 'error',
            title: error.status + '',
            text: this.translate.instant('ERROR.' + error.status),
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
          });
        });
    } else {
      this.info_info_persona = undefined
    }
  }
}
