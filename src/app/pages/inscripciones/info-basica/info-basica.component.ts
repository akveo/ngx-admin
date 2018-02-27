import { FORM_PERSONA } from './form-persona';
import { AutenticationService } from './../../../@core/utils/autentication.service';
import { PersonaService } from './../../../@core/data/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-basica',
  templateUrl: './info-basica.component.html',
  styleUrls: ['./info-basica.component.scss',
]
})
export class InfoBasicaComponent implements OnInit {

  public formulario: any;
  private token: any;
  ejemplo: any;

  constructor(private persona: PersonaService, private autenticacion: AutenticationService) {
    this.formulario=FORM_PERSONA;
  }

  ngOnInit() {
    this.persona.get("persona")
      .subscribe(res => {
      this.ejemplo = res;
  });

  this.token =  this.autenticacion.getPayload();

  }

  traerDatosBasicos(event) {
    if(event.valid){
      console.log("entro");

    }
    console.log(event)
  }
}


