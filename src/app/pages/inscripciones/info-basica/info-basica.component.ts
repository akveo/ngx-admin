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
  public usuario: any;

  constructor(private persona: PersonaService, private autenticacion: AutenticationService) {
    this.formulario = FORM_PERSONA;
    this.percentage = 0.0;
  }

  ngOnInit() {
    this.persona.get('persona/full/?userid='+this.autenticacion.getPayload().sub)
        .subscribe(res => {
          if(res !== null){
            this.usuario = res;
            this.usuario  = this.usuario.Persona;
            this.usuario.CiudadNacimiento={Id:this.usuario.CiudadNacimiento};
            console.info(this.usuario);
          }
      });
  }

  traerDatosBasicos(event) {
    if (event.valid) {
      event.data.Persona.Usuario = this.autenticacion.getPayload().sub;
      if(this.usuario === undefined) {
        this.persona.post('persona', event.data.Persona)
        .subscribe(res => {
        this.usuario = res;
        });
      }else {
        event.data.Persona.Id = this.usuario.Id;
        this.persona.put('persona', event.data.Persona)
        .subscribe(res => {
          this.usuario = res;
          console.info(res);
        });
      }

    }

  }
}


