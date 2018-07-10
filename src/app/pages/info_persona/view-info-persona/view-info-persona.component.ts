import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CampusMidService } from '../../../@core/data/campus_mid.service';
import { InfoPersona } from '../../../@core/data/models/info_persona';

@Component({
  selector: 'ngx-view-info-persona',
  templateUrl: './view-info-persona.component.html',
  styleUrls: ['./view-info-persona.component.scss'],
})
export class ViewInfoPersonaComponent implements OnInit {

  info_persona_id: number;
  info_info_persona: InfoPersona;
  info_persona_user: string;

  @Input('info_persona_id')
  set name(info_persona_id: number) {
    this.info_persona_id = info_persona_id;
    this.loadInfoPersona();
  }

  @Output('url_editar') url_editar: EventEmitter<boolean> = new EventEmitter();


  constructor(private campusMidService: CampusMidService) {
    this.loadInfoPersona();
   }

  public editar(): void {
    this.url_editar.emit(true);
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
          } else {
            this.info_info_persona = undefined;
          }
        });
    } else {
      this.info_info_persona = undefined
    }
  }

}
