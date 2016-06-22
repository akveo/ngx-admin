import {Injectable} from '@angular/core';

@Injectable()
export class IconsService {

  icons = {
    kameleonIcons: [
      {
        name: 'Beach',
        img: 'Beach'
      },
      {
        name: 'Bus',
        img: 'Bus'
      },
      {
        name: 'Cheese',
        img: 'Cheese'
      },
      {
        name: 'Desert',
        img: 'Desert'
      },
      {
        name: 'Images',
        img: 'Images'
      },
      {
        name: 'Magician',
        img: 'Magician'
      },
      {
        name: 'Makeup',
        img: 'Makeup'
      },
      {
        name: 'Programming',
        img: 'Programming'
      },
      {
        name: 'Shop',
        img: 'Shop'
      },
      {
        name: 'Surfer',
        img: 'Surfer'
      },
      {
        name: 'Phone Booth',
        img: 'Phone-Booth'
      },
      {
        name: 'Ninja',
        img: 'Ninja'
      },
      {
        name: 'Apartment',
        img: 'Apartment'
      },
      {
        name: 'Batman',
        img: 'Batman'
      },
      {
        name: 'Medal',
        img: 'Medal-2'
      },
      {
        name: 'Money',
        img: 'Money-Increase'
      },
      {
        name: 'Street View',
        img: 'Street-View'
      },
      {
        name: 'Student',
        img: 'Student-3'
      },
      {
        name: 'Bell',
        img: 'Bell'
      },
      {
        name: 'Woman',
        img: 'Boss-5'
      },
      {
        name: 'Euro',
        img: 'Euro-Coin'
      },
      {
        name: 'Chessboard',
        img: 'Chessboard'
      },
      {
        name: 'Burglar',
        img: 'Burglar'
      },
      {
        name: 'Dna',
        img: 'Dna'
      },
      {
        name: 'Clipboard Plan',
        img: 'Clipboard-Plan'
      },
      {
        name: 'Boss',
        img: 'Boss-3'
      },
      {
        name: 'Key',
        img: 'Key'
      },
      {
        name: 'Surgeon',
        img: 'Surgeon'
      },
      {
        name: 'Hacker',
        img: 'Hacker'
      },
      {
        name: 'Santa',
        img: 'Santa'
      }
    ],
    kameleonRoundedIcons: [
      {
        color: 'success',
        img: 'Apartment',
        name: 'Apartment'
      },
      {
        color: 'warning',
        img: 'Bus',
        name: 'Bus'
      },
      {
        color: 'primary',
        img: 'Checklist',
        name: 'Checklist'
      },
      {
        color: 'warning',
        img: 'Desert',
        name: 'Desert'
      },
      {
        color: 'danger',
        img: 'Laptop-Signal',
        name: 'Laptop Signal'
      },
      {
        color: 'info',
        img: 'Love-Letter',
        name: 'Love Letter'
      },
      {
        color: 'success',
        img: 'Makeup',
        name: 'Makeup'
      },
      {
        color: 'primary',
        img: 'Santa',
        name: 'Santa'
      },
      {
        color: 'success',
        img: 'Surfer',
        name: 'Surfer'
      },
      {
        color: 'info',
        img: 'Vector',
        name: 'Vector'
      },
      {
        color: 'warning',
        img: 'Money-Increase',
        name: 'Money Increase'
      },
      {
        color: 'info',
        img: 'Alien',
        name: 'Alien'
      },
      {
        color: 'danger',
        img: 'Online-Shopping',
        name: 'Online Shopping'
      },
      {
        color: 'warning',
        img: 'Euro-Coin',
        name: 'Euro'
      },
      {
        color: 'info',
        img: 'Boss-3',
        name: 'Boss'
      }
    ],
    fontAwesomeIcons: ['fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 'fa fa-arrows-h', 'fa fa-arrows-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-automobile', 'fa fa-ban', 'fa fa-bank', 'fa fa-bar-chart', 'fa fa-bar-chart-o', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer', 'fa fa-bell', 'fa fa-bell-o', 'fa fa-bell-slash', 'fa fa-bell-slash-o', 'fa fa-bicycle', 'fa fa-binoculars', 'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'fa fa-bookmark-o', 'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'fa fa-building-o', 'fa fa-bullhorn'],
    socicon: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ',', ';', ':', '+', '@', '=', '-', '^', '?', '$', '*', '&', '(', '#', '.', '_', ']', ')', '\'', '"', '}', '{']
  };

  getAll() {
    return this.icons;
  }
}
