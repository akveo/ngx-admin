import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-dinamicform',
  templateUrl: './dinamicform.component.html',
  styleUrls: ['./dinamicform.component.scss'],
})


export class DinamicformComponent implements OnInit {
  acceptHtml = '';
  acceptTs = '';
  activeColor: string = '#3366CC';

  @Input('normalform') normalform: any;
  @Output('result') result: EventEmitter<any> = new EventEmitter();
  @Output('resultSmart') resultSmart: EventEmitter<any> = new EventEmitter();
  data = {};

  constructor() {
  }

  onChange(event, c) {
    c.valor = event.srcElement.files;
    this.validCampo(c);
  }

  ngOnInit() {
    this.normalform.campos = this.normalform.campos.map(d => {
      d.clase = 'form-control';
      if (!d.valor) {
        d.valor = '';
      }
      if (!d.deshabilitar) {
        d.deshabilitar = false;
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

    if (c.etiqueta === 'select') {
      if (c.valor === 0) {
        c.clase = 'form-control form-control-danger'
        c.alerta = 'Seleccione el campo'
      } else {
        c.alerta = ''
        c.clase = 'form-control form-control-success'
      }
    }

    if (!this.normalform.btn) {
      if (this.validForm().valid) {
        this.resultSmart.emit(this.validForm());
      }
    }
  }


  clearForm() {
    this.normalform.campos = this.normalform.campos.map(d => {
      if (d.valor.id) {
        d.valor.id = 0;
      } else {
        d.valor = '';
      }
      return d;
    });
  }

  validForm() {

    let result = '';
    let requeridos = 0;
    let resueltos = 0;

    const objeto = {
      valid: true,
      data: {},
      percentage: 0,
    };

    if (this.normalform.modelo) {
      result = '{"' + this.normalform.modelo + '":{';
    } else {
      result = '{';
    }
    this.normalform.campos.forEach(d => {
      if (d.requerido) {
        requeridos++;
      }
      if (d.etiqueta === 'select') {
        if (d.valor.id === 0) {
          objeto.valid = false;
          d.clase = 'form-control form-control-danger'
          d.alerta = 'Seleccione el campo'
        } else {
          d.alerta = ''
          d.clase = 'form-control form-control-success'
        }
      }
      if (d.tipo === 'file') {
        if (d.valor.id === 0) {
          objeto.valid = false;
          d.clase = 'form-control form-control-danger'
          d.alerta = 'Seleccione el campo'
        } else {
          d.alerta = ''
          d.clase = 'form-control form-control-success'
        }
      }
      if (d.etiqueta === 'radio') {
        if (d.valor.Id === undefined) {
          objeto.valid = false;
          d.clase = 'form-control form-control-danger'
          d.alerta = 'Seleccione el campo'
        } else {
          d.alerta = ''
          d.clase = 'form-control form-control-success'
        }
      }
      if (d.requerido && (d.valor === '')) {
        objeto.valid = false;
        d.alerta = '** Debe llenar este campo';
        d.clase = 'form-control form-control-danger';
      } else if (d.valor !== '') {
        if (d.requerido) {
          resueltos++;
        }
        result += '"' + d.nombre + '":' + JSON.stringify(d.valor) + ',';
      }
    });
    if (objeto.valid) {
      if (this.normalform.modelo) {
        result = result.substring(0, result.length - 1) + '}}';
      } else {
        result = result.substring(0, result.length - 1) + '}';
      }
      objeto.data = JSON.parse(result);
    }
    objeto.percentage = (resueltos / requeridos);
    this.result.emit(objeto);
    return objeto;
  }

  isEqual(obj1, obj2) {
    return obj1 === obj2;
  }
}
