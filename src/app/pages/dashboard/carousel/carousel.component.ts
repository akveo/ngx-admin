import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngx-carousel',
    styleUrls: ['./carousel.component.scss'],
    templateUrl: './carousel.component.html',
    providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})

export class CarouselComponent {
    slides: any;
    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 5000;
        config.wrap = false;
        config.keyboard = true;
        this.slides = [{
            image: 'https://cursos.paginaswebbogota.com/WwordPress/wp-content/uploads/2013/11/slider-wp-1-783x350.png',
            title: 'First slide label',
            info: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            url: 'https://campusvirtual.udistrital.edu.co/',
            alt: 'Random first slide',
        }, {
            image: 'https://cursos.paginaswebbogota.com/WwordPress/wp-content/uploads/2013/11/slider-wp-1-783x350.png',
            title: 'First slide label',
            info: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            url: 'https://campusvirtual.udistrital.edu.co/',
            alt: 'Random first slide',
        }, {
            image: 'https://cursos.paginaswebbogota.com/WwordPress/wp-content/uploads/2013/11/slider-wp-1-783x350.png',
            title: 'First slide label',
            info: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            url: 'https://campusvirtual.udistrital.edu.co/',
            alt: 'Random first slide',
        }, {
            image: 'https://cursos.paginaswebbogota.com/WwordPress/wp-content/uploads/2013/11/slider-wp-1-783x350.png',
            title: 'First slide label',
            info: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            url: 'https://campusvirtual.udistrital.edu.co/',
            alt: 'Random first slide',
        }, {
            image: 'https://cursos.paginaswebbogota.com/WwordPress/wp-content/uploads/2013/11/slider-wp-1-783x350.png',
            title: 'First slide label',
            info: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            url: 'https://campusvirtual.udistrital.edu.co/',
            alt: 'Random first slide',
        }]
    }
}
