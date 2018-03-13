import { FORM_PERSONA } from './form-persona';

import { AutenticationService } from './../../../@core/utils/autentication.service';
import { PersonaService } from './../../../@core/data/persona.service';
import { UbicacionesService } from './../../../@core/data/ubicaciones.service';
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
  public departamentos: any;
  public municipios: any;

  constructor(
     private persona: PersonaService,
     private autenticacion: AutenticationService,
     private ubicacionService: UbicacionesService) {
    this.formulario = FORM_PERSONA;
  }

  getInfo(event) {
    console.info(event.nombre);
    switch (event.nombre){
       case 'PaisNacimiento': {
         const query =  'query=LugarPadre.Id:' +  event.valor.Id +
                        ',LugarHijo.TipoLugar.Id:4' +
                        ',Activo:true';
         this.ubicacionService.get('relacion_lugares', new URLSearchParams(query))
           .subscribe(res => {
             this.departamentos = <Array<Object>>res;
             this.departamentos.forEach(element => {
               Object.defineProperty(element, "valor",
               Object.getOwnPropertyDescriptor(element.LugarHijo, "Nombre"));
             });

             this.departamentos.unshift(this.formulario.campos[5].opciones[0]);
             this.formulario.campos[5].opciones = this.departamentos;
           });
           break;
       }
       case 'DepartamentoNacimiento': {
         console.info(event);
         const query =  'query=LugarPadre.Id:' +  event.valor.Id +
                        ',LugarHijo.TipoLugar.Id:2' +
                        ',Activo:true';
         this.ubicacionService.get('relacion_lugares', new URLSearchParams(query))
           .subscribe(res => {
             console.info(res);
             this.municipios=<Array<Object>>res;
             this.municipios.forEach(element => {
               Object.defineProperty(element, "valor",
               Object.getOwnPropertyDescriptor(element.LugarHijo, "Nombre"));
             });

             this.municipios.unshift(this.formulario.campos[6].opciones[0]);
             this.formulario.campos[6].opciones = this.municipios;
           });
          break;
       }
       default: {
          //statements;
          break;
       }
     }
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

  cargarPaises(): void {
    var paises:Array<Object>=[];
    const query =  'query=TipoLugar.Id:1' +
                   ',TipoLugar.Activo:true' +
                   ',Activo:true';

    this.ubicacionService.get('lugar' ,new URLSearchParams(query))
      .subscribe(res => {
        paises=<Array<Object>>res;
        paises.forEach(element => {
          Object.defineProperty(element, "valor",
          Object.getOwnPropertyDescriptor(element, "Nombre"));
        });
        paises.unshift(this.formulario.campos[4].opciones[0]);
        this.formulario.campos[4].opciones = paises;
      });

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
    this.cargarPaises();
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
