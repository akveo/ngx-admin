import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'ngx-dinamicform',
  templateUrl: './dinamicform.component.html',
  styleUrls: ['./dinamicform.component.scss'],
})


export class DinamicformComponent implements OnInit, OnChanges {

  @Input('normalform') normalform: any;
  @Input('modeloData') modeloData: any;
  @Output('result') result: EventEmitter<any> = new EventEmitter();
  @Output('resultSmart') resultSmart: EventEmitter<any> = new EventEmitter();
  @Output('interlaced') interlaced: EventEmitter<any> = new EventEmitter();
  data: any;
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  constructor() {
    this.data = {
      valid: true,
      data: {},
      percentage: 0,
      files: [],
    };
  }

  ngOnChanges(changes) {
    if (changes.normalform !== undefined) {
      if (changes.normalform.currentValue !== undefined) {
        this.normalform = changes.normalform.currentValue;
      }
    }
    if (changes.modeloData !== undefined) {
      if (changes.modeloData.currentValue !== undefined) {
        this.modeloData = changes.modeloData.currentValue;
        if (this.normalform.campos) {
          this.normalform.campos.forEach(element => {
            for (const i in this.modeloData) {
              if (this.modeloData.hasOwnProperty(i)) {
                if (i === element.nombre) {
                  if (element.etiqueta === 'input' && element.tipo === 'date') {
                    element.valor = (new Date(this.modeloData[i])).toISOString().substring(0, 10);
                  } else {
                    element.valor = this.modeloData[i];
                  }
                  if (element.etiqueta === 'mat-date') {
                    element.valor = new Date(this.modeloData[i]);
                  }
                }
              }
            }
          });
        }
      }
    }
  }

  onChange(event, c) {
    c.valor = event.srcElement.files[0];
    this.validCampo(c);
  }

  ngOnInit() {

    if (!this.normalform.tipo_formulario) {
      this.normalform.tipo_formulario = 'grid';
    }

    this.normalform.campos = this.normalform.campos.map(d => {
      d.clase = 'form-control';
      if (d.relacion === undefined) {
        d.relacion = true;
      }
      if (!d.valor) {
        d.valor = '';
      }
      if (!d.deshabilitar) {
        d.deshabilitar = false;
      }
      return d;
    });
  }

  onChangeDate(event, c) {
    c.valor = event.value;
    console.info('c', c);
  }

  validCampo(c) {
    if (c.entrelazado) {
      this.interlaced.emit(c);
    }
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
    if (c.etiqueta === 'file') {
      if (c.valor !== undefined) {
        if (c.valor.size > c.tamanoMaximo * 1024000) {
          console.info(c);
          c.clase = 'form-control form-control-danger';
          c.alerta = 'El tamaño del archivo es superior a : ' + c.tamanoMaximo + 'MB. ';
        } else {
          c.alerta = ''
          c.clase = 'form-control form-control-success'
        }
        if ((c.valor.type.split('/'))[0].indexOf(c.tipo) === -1 ||
          (c.formatos.indexOf(c.valor.type.split('/')[1]) === -1)) {
          c.clase = 'form-control form-control-danger';
          c.alerta += 'Solo se admiten los siguientes formatos: ' + c.formatos;
        } else {
          c.alerta = ''
          c.clase = 'form-control form-control-success'
        }
      } else {
        c.alerta = '** Debe llenar este campo';
        c.clase = 'form-control form-control-danger';
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
        d.valor.Id = 0;
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

    this.data.valid = true;
    this.data.data = {};
    this.data.percentage = 0;
    this.data.files = [];

    if (this.normalform.modelo) {
      result = '{"' + this.normalform.modelo + '":{';
    } else {
      result = '{';
    }
    this.normalform.campos.forEach(d => {
      if (d.requerido) {
        requeridos++;
      }

      if (d.etiqueta === 'input' && d.tipo === 'number') {
        if (parseInt(d.valor, 10) < d.minimo) {
          this.data.valid = false;
          d.clase = 'form-control form-control-danger'
          d.alerta = 'El valor no puede ser menor que ' + d.minimo
        } else {
          d.alerta = ''
          d.clase = 'form-control form-control-success'
        }
      }
      if (d.etiqueta === 'radio') {
        if (d.valor.Id === undefined) {
          this.data.valid = false;
          d.clase = 'form-control form-control-danger'
          d.alerta = 'Seleccione el campo'
        } else {
          d.alerta = ''
          d.clase = 'form-control form-control-success'
        }
      }
      if (d.requerido && (d.valor === '')) {
        this.data.valid = false;
        d.alerta = '** Debe llenar este campo';
        d.clase = 'form-control form-control-danger';
      } else if (d.valor !== '' && d.etiqueta !== 'file') {
        if (d.requerido) {
          resueltos++;
        }
        if (d.etiqueta === 'input' && d.tipo === 'date') {
          if (d.valor !== undefined) {
            result += '"' + d.nombre + '":' + JSON.stringify(new Date(d.valor)) + ',';
          }
        } else {
          if (d.relacion) {
            result += '"' + d.nombre + '":' + JSON.stringify(d.valor) + ',';
          } else {
            result += '"' + d.nombre + '":' + JSON.stringify(d.valor.Id) + ',';
          }
        }
      } else if (d.valor !== {} && d.etiqueta === 'file') {
        if (d.requerido) {
          resueltos++;
        }
        this.data.files.push({ nombre: d.nombre, file: d.valor });
      }

      if (d.etiqueta === 'select') {
        if (d.valor.Id === 0) {
          this.data.valid = false;
          d.clase = 'form-control form-control-danger'
          d.alerta = 'Seleccione el campo'
        } else {
          d.alerta = ''
          d.clase = 'form-control form-control-success'
        }
      }

    });
    if (this.data.valid && (resueltos / requeridos) === 1) {
      if (this.normalform.modelo) {
        result = result.substring(0, result.length - 1) + '}}';
      } else {
        result = result.substring(0, result.length - 1) + '}';
      }
      this.data.data = JSON.parse(result);
    }
    this.data.percentage = (resueltos / requeridos);
    this.result.emit(this.data);
    return this.data;
  }

  isEqual(obj1, obj2) {
    return obj1 === obj2;
  }
}
