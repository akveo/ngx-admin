import { InfoCaracteristica } from './../../../@core/data/models/info_caracteristica';
import { Component, OnInit, Input } from '@angular/core';
import { CampusMidService } from '../../../@core/data/campus_mid.service';

@Component({
  selector: 'ngx-view-info-caracteristica',
  templateUrl: './view-info_caracteristica.component.html',
  styleUrls: ['./view-info_caracteristica.component.scss'],
})
export class ViewInfoCaracteristicaComponent implements OnInit {

  info_info_caracteristica: InfoCaracteristica;
  info_caracteristica_id: number;

  @Input('info_caracteristica_id')
  set name(info_caracteristica_id: number) {
    this.info_caracteristica_id = info_caracteristica_id;
    this.loadInfoCaracteristica();
  }

  constructor( private campusMidService: CampusMidService ) { }

  public loadInfoCaracteristica(): void {
    if (this.info_caracteristica_id !== undefined && this.info_caracteristica_id !== 0 &&
      this.info_caracteristica_id.toString() !== '') {
      this.campusMidService.get('/persona/DatosComplementarios/' + this.info_caracteristica_id)
        .subscribe(res => {
          const r = <any>res;
          if (r !== null && r.Type !== 'error') {
            this.info_info_caracteristica = <InfoCaracteristica>res;
          } else  {
            this.info_info_caracteristica = undefined;
          }
        });
    } else  {
      this.info_info_caracteristica = undefined;
    }
  }

  ngOnInit() {
  }

}
