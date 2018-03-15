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

  constructor(
     private persona: PersonaService,
     private autenticacion: AutenticationService,
     private ubicacionService: UbicacionesService) {
    this.formulario = FORM_PERSONA;
  }

  getInfo(event) {
    switch (event.nombre) {
       case 'PaisNacimiento': {
         let departamentos: Array<any> = [];
         const query =  'query=LugarPadre.Id:' +  event.valor.Id +
                        ',LugarHijo.TipoLugar.Id:4' +
                        ',Activo:true';
         this.ubicacionService.get('relacion_lugares', new URLSearchParams(query))
           .subscribe(res => {
             if (res !== null) {
               departamentos = <Array<any>>res;
               departamentos.forEach(element => {
                 Object.defineProperty(element, 'valor',
                 Object.getOwnPropertyDescriptor(element.LugarHijo, 'Nombre'));
                 Object.defineProperty(element, 'Id',
                 Object.getOwnPropertyDescriptor(element.LugarHijo, 'Id'));
               });
             }
             departamentos.unshift(this.formulario.campos[5].opciones[0]);
             this.formulario.campos[5].opciones = departamentos;
           });
           break;
       }
       case 'DepartamentoNacimiento': {
         let municipios: Array<any> = [];
         const query =  'query=LugarPadre.Id:' +  event.valor.Id +
                        ',LugarHijo.TipoLugar.Id:2' +
                        ',Activo:true';
         this.ubicacionService.get('relacion_lugares', new URLSearchParams(query))
           .subscribe(res => {
             if (res !== null) {
               municipios = <Array<any>>res;
               municipios.forEach(element => {
                 Object.defineProperty(element, 'valor',
                 Object.getOwnPropertyDescriptor(element.LugarHijo, 'Nombre'));
                 Object.defineProperty(element, 'Id',
                 Object.getOwnPropertyDescriptor(element.LugarHijo, 'Id'));
               });
             }
             municipios.unshift(this.formulario.campos[6].opciones[0]);
             this.formulario.campos[6].opciones = municipios;
           });
          break;
       }
       default: {
          // statements;
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
    let paises: Array<Object> = [];
    const query =  'query=TipoLugar.Id:1' +
                   ',TipoLugar.Activo:true' +
                   ',Activo:true';

    this.ubicacionService.get('lugar', new URLSearchParams(query))
      .subscribe(res => {
        if (res !== null) {
          paises = <Array<Object>>res;
          paises.forEach(element => {
            Object.defineProperty(element, 'valor',
            Object.getOwnPropertyDescriptor(element, 'Nombre'));
          });
        }
        paises.unshift(this.formulario.campos[4].opciones[0]);
        this.formulario.campos[4].opciones = paises;
      });

  }

  actualizarInfoPersona(persona: any): void {
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
