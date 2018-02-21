import { Component } from '@angular/core';
import { DATOS_PERSONALES } from './forms';

@Component({
  selector: 'ngx-posgrado',
  templateUrl: './posgrado.component.html',
  styleUrls: ['./posgrado.component.scss'],
})
export class PosgradoComponent {
  formDatosBasicos: any;
  percentage = 90;
  color = 'primary'

  traerDatos(event) {
    console.log(event)
  }

  traerPersonaSmart(event) {
    console.log(event)
  }

  constructor() {
    this.formDatosBasicos = DATOS_PERSONALES;
   }

}
