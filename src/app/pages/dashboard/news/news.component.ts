import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
    selector: 'ngx-news',
    styleUrls: ['./news.component.scss'],
    templateUrl: './news.component.html',
})

export class NewsComponent {

    currentTheme: string;
    themeSubscription: any;
    news: any;

    constructor(private themeService: NbThemeService) {
        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.currentTheme = theme.name;
        });
        this.news = [{
            img: 'https://campusvirtual.udistrital.edu.co/images/programas/MaestriaTelecomunicaciones%20190x120.jpg',
            url: 'https://campusvirtual.udistrital.edu.co/index.php?option=com_content&view=article&id=6&Itemid=194',
            title: 'Maestría en Telecomunicaciones Móviles',
            description: 'Hace parte de los planes de mejoramiento y desarrollo del' +
            'programa de la Especialización en Telecomunicaciones Móviles.',

        }, {
            img: 'https://campusvirtual.udistrital.edu.co/images/programas/macarena2.jpg',
            url: 'https://campusvirtual.udistrital.edu.co/index.php/programas/' +
            'ciencias-y-educacion/postgrados-ciencias/maestria-educacion.html',
            title: 'Maestría en Educación en Tecnología',
            description: 'La Maestría en Educación en Tecnología busca formar docentes que' +
            'sean agentes de cambio en la construcción de conocimiento en el área.',

        }, {
            img: 'https://campusvirtual.udistrital.edu.co/images/teclado.jpg',
            url: 'https://campusvirtual.udistrital.edu.co/index.php?option=com_content&view=article&layout=edit&id=36',
            title: 'Resultados proceso de selección',
            description: 'Nos permitimos informar que los resultados del proceso de admisión a las Maestrías en ' +
            'Telecomunicaciones Móviles y la Maestría en Educación en Tecnología, serán publicados el próximo' +
            ' Lunes 29 de Febrero. ',

        }];
    }
}
