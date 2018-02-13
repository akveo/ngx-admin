import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-dinamicform',
  templateUrl: './dinamicform.component.html',
  styleUrls: ['./dinamicform.component.scss']
})
export class DinamicformComponent implements OnInit {
  @Input('normalform') normalform: any;
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.normalform.campos = this.normalform.campos.map(d => {
      d.clase = 'form-control';
      if(!d.valor){
        d.valor = '';
      }
      return d;
    });
  }

  validCampo(c) {
    if (c.valor === '') {
      c.clase = 'form-control form-control-danger'
    } else {
      c.alerta = ''
      c.clase = 'form-control form-control-success'
    }
  }

  validForm() {
    let result = '';
    let objeto = {
      valid: true,
      data: {},
    };
    if (this.normalform.modelo) {
      result = '{"' + this.normalform.modelo + '":{';
    } else {
      result = '{';
    }
    this.normalform.campos.forEach(d => {
      if (d.requierido && d.valor === '') {
        objeto.valid = false;
        d.alerta = '** Debe llenar este campo';
        d.clase = 'form-control form-control-danger';
      }else if(d.valor !== '' ){
        result += '"' + d.nombre + '":"' + d.valor + '",';
      }
    });
    if(objeto.valid){
      if (this.normalform.modelo) {
        result = result.substring(0, result.length - 1) + '}}';
      } else {
        result = result.substring(0, result.length - 1) + '}';
      }
      objeto.data = JSON.parse(result);
    }
    this.result.emit(objeto);
  }

}
