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
            img: 'https://campusvirtual.udistrital.edu.co/images/programas/macarena2.jpg',
            url: '',
            title: 'Maestría en Educación en Tecnología',
            description: 'La Maestría en Educación en Tecnología busca formar docentes que' +
                'sean agentes de cambio en la construcción de conocimiento en el área.',

        }];
    }
}
