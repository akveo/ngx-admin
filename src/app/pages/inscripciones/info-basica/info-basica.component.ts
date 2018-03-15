import { FORM_PERSONA } from './form-persona';

import { AutenticationService } from './../../../@core/utils/autentication.service';
import { PersonaService } from './../../../@core/data/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-info-basica-persona',
  templateUrl: './info-basica.component.html',
  styleUrls: ['./info-basica.component.scss'],
})
export class InfoBasicaComponent implements OnInit {

  public formulario: any;
  public usuario: any;
  public campo: any;


  constructor(private persona: PersonaService, private autenticacion: AutenticationService) {
    this.formulario = FORM_PERSONA;
  }

  getInfo(event) {
    console.info(event);
    const temp = [
      { Id: 1, valor: 'AAA' },
      { Id: 2, valor: 'BBB' },
      { Id: 3, valor: 'CCC' },
      { Id: 4, valor: 'DDD' }];
    temp.unshift(this.formulario.campos[5].opciones[0]);
    this.formulario.campos[5].opciones = [...temp];
    console.info(this.formulario.campos[5].opciones)
  }

  cargarInfoPersona(): void {
    if (this.autenticacion.live()) {
      this.persona.get('persona/?query=Usuario:' + this.autenticacion.getPayload().sub)
        .subscribe(res => {
          if (res !== null) {
            this.usuario = res[0];
            this.usuario.CiudadNacimiento = { Id: this.usuario.CiudadNacimiento };
          }
        });
    }
  }

  actualizarInfoPersona(persona: any): void {
    console.info(persona);
    persona.Id = this.usuario.Id;
    persona.usuario = this.usuario.Usuario;
    this.persona.put('persona', persona)
      .subscribe(res => {
        this.cargarInfoPersona();
      });
  }

  registrarPersona(persona: any): void {
    persona.Usuario = this.autenticacion.getPayload().sub;
    this.persona.post('persona', persona)
      .subscribe(res => {
        this.usuario = res;
        // this.cargarInfoPersona();
      });
  }

  ngOnInit() {
    this.cargarInfoPersona();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.usuario === undefined) {
        this.registrarPersona(event.data.Persona);
      } else {
        this.actualizarInfoPersona(event.data.Persona);
      }
    }
  }

}


