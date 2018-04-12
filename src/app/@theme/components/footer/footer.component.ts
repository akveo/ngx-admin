import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  normatividad: any;
  recomendados: any;

  constructor() {
    this.normatividad = [{
      subtitle: 'Académica',
      list: [{
        label: 'Derechos pecuniarios 2018',
        url: 'http://sgral.udistrital.edu.co/xdata/sgral/Derechos_Pecuniarios2018.pdf',
      }, {
        label: 'Estatuto Académico',
        url: 'http://sgral.udistrital.edu.co/xdata/csu/acu_1996-004.pdf',
      }, {
        label: 'Estatuto Estudiantil',
        url: 'http://sgral.udistrital.edu.co/xdata/csu/acu_1993-027.pdf',
      }, {
        label: 'Estatuto Docente',
        url: 'http://sgral.udistrital.edu.co/xdata/csu/acu_2002-011.pdf',
      }],
    },
    {
      subtitle: 'General',
      list: [{
        label: 'Estatuto General',
        url: 'http://sgral.udistrital.edu.co/xdata/csu/acu_1997-003.pdf',
      }],
    }];
    this.recomendados = [{
      label: 'Sistema de gestión ambiental.',
      url: 'http://comunidad.udistrital.edu.co/piga/',
    }, {
      label: 'Bitácora.',
      url: 'http://comunidad.udistrital.edu.co/bitacoraud/',
    }, {
      label: 'Distrinautas',
      url: 'http://comunidad.udistrital.edu.co/distrinautas/',
    }, {
      label: 'Elecciones UD',
      url: 'http://comunidad.udistrital.edu.co/elecciones/',
    }, {
      label: 'Transparencia y acceso a la información pública',
      url: 'https://www.udistrital.edu.co/transparencia',
    }, {
      label: 'Hora legal Colombiana',
      url: 'http://horalegal.inm.gov.co/',
    }, {
      label: 'SPWI anterior',
      url: 'http://www1.udistrital.edu.co/',
    }, {
      label: 'Ingreso publicadores',
      url: 'https://www.udistrital.edu.co/user/login',
    }];
  }
}
