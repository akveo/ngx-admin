import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ngx-dinamicform',
  templateUrl: './dinamicform.component.html',
  styleUrls: ['./dinamicform.component.scss'],
})


export class DinamicformComponent implements OnInit, OnChanges {

  @Input('normalform') normalform: any;
  @Input('modeloData') modeloData: any;
  @Input('clean') clean: boolean;
  @Output('result') result: EventEmitter<any> = new EventEmitter();
  @Output('resultSmart') resultSmart: EventEmitter<any> = new EventEmitter();
  @Output('interlaced') interlaced: EventEmitter<any> = new EventEmitter();
  data: any;
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  constructor(private sanitization: DomSanitizer) {
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
                    this.validCampo(element);
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
    if (changes.clean !== undefined) {
      this.clearForm();
      this.clean = false;
    }

  }

  onChange(event, c) {
    if (c.valor !== undefined) {
      c.valor = event.srcElement.files[0];
      console.info("valor", c.valor);
      c.url = this.cleanURL(URL.createObjectURL(event.srcElement.files[0]));
      console.info(c);
      this.validCampo(c);
    }
  }

  cleanURL(oldURL : string): SafeResourceUrl{
    return this.sanitization.bypassSecurityTrustUrl(oldURL);
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
  }

  validCampo(c): boolean {

    if (c.requerido && (c.valor === '' || c.valor === null || c.valor === undefined ||
      (JSON.stringify(c.valor) === '{}' && c.etiqueta !== 'file') || JSON.stringify(c.valor) === '[]')) {
      c.alerta = '** Debe llenar este campo';
      c.clase = 'form-control form-control-danger';
      return false;
    }
    if (c.etiqueta === 'input' && c.tipo === 'number') {
      c.valor = parseInt(c.valor, 10);
      if (c.valor < c.minimo) {
        c.clase = 'form-control form-control-danger';
        c.alerta = 'El valor no puede ser menor que ' + c.minimo;
        return false;
      }
    }
    if (c.etiqueta === 'radio') {
      if (c.valor.Id === undefined) {
        c.clase = 'form-control form-control-danger';
        c.alerta = 'Seleccione el campo';
        return false;
      }
    }
    if (c.entrelazado) {
      this.interlaced.emit(c);
    }
    if (c.etiqueta === 'select') {
      if (c.valor == null) {
        c.clase = 'form-control form-control-danger';
        c.alerta = 'Seleccione el campo';
        return false;
      }
    }
    if (c.etiqueta === 'file' && c.valor !== null && c.valor !== undefined && c.valor !== '') {
      if (c.valor.size > c.tamanoMaximo * 1024000) {
        c.clase = 'form-control form-control-danger';
        c.alerta = 'El tamaño del archivo es superior a : ' + c.tamanoMaximo + 'MB. ';
        return false;
      }
      if (c.formatos.indexOf(c.valor.type.split('/')[1]) === -1) {
        c.clase = 'form-control form-control-danger';
        c.alerta = 'Solo se admiten los siguientes formatos: ' + c.formatos;
        return false;
      }
    }
    if (!this.normalform.btn) {
      if (this.validForm().valid) {
        this.resultSmart.emit(this.validForm());
      }
    }
    c.clase = 'form-control form-control-success';
    c.alerta = '';
    return true;
  }


  clearForm() {
    this.normalform.campos.forEach(d => {
      d.valor = null;
    });
  }

  validForm() {

    const result = {};
    let requeridos = 0;
    let resueltos = 0;
    this.data.data = {};
    this.data.percentage = 0;
    this.data.files = [];
    this.data.valid = true;

    this.normalform.campos.forEach(d => {
      requeridos = d.requerido ? requeridos + 1 : requeridos;
      if (this.validCampo(d)) {
        if (d.etiqueta === 'file') {
          this.data.files.push({ nombre: d.nombre, file: d.valor });
          result[d.nombre] = d.valor;
          // result[d.nombre].push({ nombre: d.name, file: d.valor });
        } else if (d.etiqueta === 'select') {
          result[d.nombre] = d.relacion ? d.valor : d.valor.Id;
        } else {
          result[d.nombre] = d.valor;
        }
        resueltos = d.requerido ? resueltos + 1 : resueltos;
      } else {
        this.data.valid = false;
      }
    });

    if (this.data.valid && (resueltos / requeridos) === 1) {
      if (this.normalform.modelo) {
        this.data.data[this.normalform.modelo] = result;
      } else {
        this.data.data = result;
      }
    }

    this.data.percentage = (resueltos / requeridos);
    for (const key in this.modeloData) {  // Agrega parametros faltantes del modelo
      if (this.data.data[this.normalform.modelo] !== undefined && !this.data.data[this.normalform.modelo].hasOwnProperty(key)) {
        this.data.data[this.normalform.modelo][key] = this.modeloData[key];
      }
    }

    this.result.emit(this.data);
    return this.data;
  }

  isEqual(obj1, obj2) {
    return obj1 === obj2;
  }
}
