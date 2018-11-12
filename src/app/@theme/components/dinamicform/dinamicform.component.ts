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
  @Output('resultAux') resultAux: EventEmitter<any> = new EventEmitter();
  @Output('resultSmart') resultSmart: EventEmitter<any> = new EventEmitter();
  @Output('interlaced') interlaced: EventEmitter<any> = new EventEmitter();
  @Output('percentage') percentage: EventEmitter<any> = new EventEmitter();
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
                if (i === element.nombre && this.modeloData[i] !== null) {
                  switch (element.etiqueta) {
                    case 'selectmultiple':
                      element.valor = [];
                      if (this.modeloData[i].length > 0) {
                        this.modeloData[i].forEach((e1) => element.opciones.forEach((e2) => {
                          if (e1.Id === e2.Id) {
                            element.valor.push(e2);
                          }
                        }));
                      }
                      break;
                    case 'select':
                      if (element.hasOwnProperty('opciones')) {
                        element.opciones.forEach((e1) => {
                          if (this.modeloData[i].Id !== null) {
                            if (e1.Id === this.modeloData[i].Id) {
                              element.valor = e1;
                            }
                          }
                        });
                      }
                      break;
                    case 'mat-date':
                      element.valor = new Date(this.modeloData[i]);
                      break;
                    case 'file':
                      element.url = this.cleanURL(this.modeloData[i]);
                      element.urlTemp = this.modeloData[i];
                      break;
                    default:
                      element.valor = this.modeloData[i];
                  }
                  this.validCampo(element);
                }
              }
            }
          });
          this.setPercentage()
        }
      }
    }
    if (changes.clean !== undefined) {
      this.clearForm();
      this.clean = false;
    }
  }

  download(url, title, w, h) {
    const left = (screen.width / 2) - (w / 2);
    const top = (screen.height / 2) - (h / 2);
    window.open(url, title, 'toolbar=no,' +
      'location=no, directories=no, status=no, menubar=no,' +
      'scrollbars=no, resizable=no, copyhistory=no, ' +
      'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  }

  onChange(event, c) {
    console.info(c.valor);
    if (c.valor !== undefined) {
      c.urlTemp = URL.createObjectURL(event.srcElement.files[0])
      c.url = this.cleanURL(c.urlTemp);
      c.valor = event.srcElement.files[0];
      console.info(c);
      this.validCampo(c);
      c.File = event.srcElement.files[0];
    }
  }

  cleanURL(oldURL: string): SafeResourceUrl {
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

    if (c.etiqueta === 'file') {
      console.info((c.etiqueta === 'file' && c.valor.name === undefined));
    }
    if (c.requerido && ((c.valor === '' && c.etiqueta !== 'file') || c.valor === null || c.valor === undefined ||
      (JSON.stringify(c.valor) === '{}' && c.etiqueta !== 'file') || JSON.stringify(c.valor) === '[]')
      || ((c.etiqueta === 'file' && c.valor.name === undefined) && (c.etiqueta === 'file' && c.urlTemp === undefined))) {
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
          result[d.nombre] = { nombre: d.nombre, file: d.File };
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
    if (this.data.valid)
    this.percentage.emit(this.data.percentage);
    return this.data;
  }

  auxButton(c) {
    const result = {};
    this.normalform.campos.forEach(d => {
      if (d.etiqueta === 'file') {
        result[d.nombre] = { nombre: d.nombre, file: d.File };
      } else if (d.etiqueta === 'select') {
        result[d.nombre] = d.relacion ? d.valor : d.valor.Id;
      } else {
        result[d.nombre] = d.valor;
      }
    });
    const dataTemp = {
      data: result,
      button: c.nombre,
    }
    this.resultAux.emit(dataTemp);
  }


  setPercentage(): void {
    let requeridos = 0;
    let resueltos = 0;
    this.normalform.campos.forEach(form_element => {
      if (form_element.requerido) {
        requeridos = requeridos + 1;
        resueltos = form_element.valor ? resueltos + 1 : resueltos;
      }
    });
    this.percentage.emit(resueltos / requeridos);
  }

  isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
}
