import { FORM_PERSONA } from './form-persona';
import { AutenticationService } from './../../../@core/utils/autentication.service';
import { PersonaService } from './../../../@core/data/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-info-basica',
  templateUrl: './info-basica.component.html',
  styleUrls: ['./info-basica.component.scss'],
})
export class InfoBasicaComponent implements OnInit {

  public formulario: any;
  public ejemplo: any;
  public percentage: any;

  constructor(private persona: PersonaService, private autenticacion: AutenticationService) {
    this.formulario = FORM_PERSONA;
    this.percentage = 0.0;
  }

  ngOnInit() {
  }

  traerDatosBasicos(event) {
    if (event.valid) {
      event.data.Persona.Usuario = this.autenticacion.getPayload().sub;
      this.persona.post('persona', event.data.Persona)
        .subscribe(res => {
        this.ejemplo = res;
      });
    }

  }
}


