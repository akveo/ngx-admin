import { Component, OnInit } from '@angular/core';
import { ExportAsService, ExportAsConfig } from '../../../../../node_modules/ngx-export-as/lib/index';

@Component({
  selector: 'ngx-prueba-qr',
  templateUrl: './prueba-qr.component.html',
  styleUrls: ['./prueba-qr.component.scss'],
})
export class PruebaQrComponent implements OnInit {
  campusvirtual = 'https://campusvirtual.udistrital.edu.co';
  google = 'https://google.com.co';
  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'mytable',
  };

  constructor(private exportAsService: ExportAsService) { }
  exportAs(type) {
    this.config.type = type;
    this.exportAsService.save(this.config, 'file');
  }
  ngOnInit() {
  }
}
