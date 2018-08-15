import { InfoContactoGet } from '../../../@core/data/models/info_contacto_get';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CampusMidService } from '../../../@core/data/campus_mid.service';

@Component({
  selector: 'ngx-view-informacion-contacto',
  templateUrl: './view-informacion_contacto.component.html',
  styleUrls: ['./view-informacion_contacto.component.scss'],
})
export class ViewInformacionContactoComponent implements OnInit {

  info_informacion_contacto: InfoContactoGet;
  informacion_contacto_id: number;

  @Input('informacion_contacto_id')
  set name(informacion_contacto_id: number) {
    this.informacion_contacto_id = informacion_contacto_id;
    this.loadInformacionContacto();
  }

  @Output('url_editar') url_editar: EventEmitter<boolean> = new EventEmitter();

  constructor(private campusMidService: CampusMidService) { }

  public editar(): void {
    this.url_editar.emit(true);
  }

  public loadInformacionContacto(): void {
    if (this.informacion_contacto_id !== undefined && this.informacion_contacto_id !== 0 &&
      this.informacion_contacto_id.toString() !== '') {
        this.campusMidService.get('persona/DatosContacto/' + this.informacion_contacto_id + '/?query=TipoRelacionUbicacionEnte.CodigoAbreviacion:LR')
        .subscribe(res => {
          const r = <any>res;
          if (r !== null && r.Type !== 'error') {
            this.info_informacion_contacto = <InfoContactoGet>res;
          } else  {
            this.info_informacion_contacto = undefined;
          }
        });
    } else  {
      this.info_informacion_contacto = undefined;
    }
  }

  ngOnInit() {
  }

}
