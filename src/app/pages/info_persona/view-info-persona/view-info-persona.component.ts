import { Component, OnInit, Input } from '@angular/core';
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

  @Input('info_persona_id')
  set name(info_persona_id: number) {
    this.info_persona_id = info_persona_id;
    this.loadInfoPersona();
  }

  constructor(private campusMidService: CampusMidService) {
    this.loadInfoPersona();
   }

  ngOnInit() {
  }

  public loadInfoPersona(): void {
    if (this.info_persona_id !== undefined && this.info_persona_id !== 0 &&
      this.info_persona_id.toString() !== '') {
      this.campusMidService.get('persona/ConsultaPersona/Utest0' + this.info_persona_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_info_persona = <InfoPersona>res;
          }
        });
    } else {
      this.info_info_persona = undefined
    }
  }

}
