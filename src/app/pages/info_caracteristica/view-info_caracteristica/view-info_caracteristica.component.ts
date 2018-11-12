import { InfoCaracteristica } from './../../../@core/data/models/info_caracteristica';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CampusMidService } from '../../../@core/data/campus_mid.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-view-info-caracteristica',
  templateUrl: './view-info_caracteristica.component.html',
  styleUrls: ['./view-info_caracteristica.component.scss'],
})
export class ViewInfoCaracteristicaComponent implements OnInit {

  info_info_caracteristica: InfoCaracteristica;
  info_caracteristica_id: number;

  @Input('info_caracteristica_id')
  set info(info: number) {
    this.info_caracteristica_id = info;
    this.loadInfoCaracteristica();
  };

  @Output('url_editar') url_editar: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private campusMidService: CampusMidService,
    private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  public editar(): void {
    this.url_editar.emit(true);
  }

  public loadInfoCaracteristica(): void {
    if (this.info_caracteristica_id !== undefined && this.info_caracteristica_id !== 0 &&
      this.info_caracteristica_id.toString() !== '') {
      this.campusMidService.get('/persona/DatosComplementarios/' + this.info_caracteristica_id + '?query=TipoRelacionUbicacionEnte.CodigoAbreviacion:LN')
        .subscribe(res => {
          const r = <any>res;
          if (r !== null && r.Type !== 'error') {
            this.info_info_caracteristica = <InfoCaracteristica>res;
          } else  {
            this.info_info_caracteristica = undefined;
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
    } else  {
      this.info_info_caracteristica = undefined;
    }
  }

  ngOnInit() {
  }
}
