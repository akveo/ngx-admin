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

  constructor(private persona: PersonaService, private autenticacion: AutenticationService) {
    this.formulario = FORM_PERSONA;
  }

  cargarInfoPersona(): void {
    this.persona.get('persona/?query=Usuario:' + this.autenticacion.getPayload().sub)
        .subscribe(res => {
          if (res !== null) {
            this.usuario = res[0];
            this.usuario.CiudadNacimiento = { Id : this.usuario.CiudadNacimiento };
          }
      });
  }

  actualizarInfoPersona(persona: any): void {
    persona.Id = this.usuario.Id;
    persona.usuario = this.usuario.Usuario;
    this.persona.put('persona',persona)
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
      }else {
        this.actualizarInfoPersona(event.data.Persona);
      }
    }
  }

}


