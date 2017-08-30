import { Component } from '@angular/core';

@Component({
  selector: 'ngx-icons',
  styleUrls: ['./icons.component.scss'],
  templateUrl: './icons.component.html',
})
export class IconsComponent {

  icons = {

    nebular: ['nb-alert', 'nb-angle-double-left', 'nb-angle-double-right', 'nb-arrow-back', 'nb-arrow-dropdown',
      'nb-arrow-left', 'nb-arrow-retweet', 'nb-audio', 'nb-bar-chart', 'nb-checkmark', 'nb-cloudy', 'nb-coffee-maker',
      'nb-compose', 'nb-create', 'nb-email', 'nb-flame', 'nb-gear', 'nb-grid-a', 'nb-grid-b', 'nb-heart', 'nb-home',
      'nb-keypad', 'nb-layout-centre', 'nb-layout-default', 'nb-layout-one-column', 'nb-layout-sidebar-left',
      'nb-layout-sidebar-right', 'nb-layout-two-column', 'nb-lightbulb', 'nb-list', 'nb-location', 'nb-locked',
      'nb-loop', 'nb-menu', 'nb-notifications', 'nb-paper-plane', 'nb-partlysunny', 'nb-pause', 'nb-person',
      'nb-phone', 'nb-play', 'nb-plus', 'nb-plus-circled', 'nb-power', 'nb-rainy', 'nb-roller-shades', 'nb-search',
      'nb-shuffle', 'nb-skip-backward', 'nb-skip-forward', 'nb-snowy', 'nb-square', 'nb-star', 'nb-sunny', 'nb-tables',
      'nb-title', 'nb-trash', 'nb-volume-high', 'nb-volume-mute'],

    ionicons: [
      'ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c',
      'ion-arrow-down-c', 'ion-arrow-left-c', 'ion-arrow-return-right', 'ion-arrow-return-left', 'ion-arrow-swap',
      'ion-arrow-shrink', 'ion-arrow-expand', 'ion-arrow-move', 'ion-arrow-resize', 'ion-chevron-up',
      'ion-chevron-right', 'ion-chevron-down', 'ion-chevron-left', 'ion-navicon-round', 'ion-navicon',
      'ion-drag', 'ion-log-in', 'ion-log-out', 'ion-checkmark-round', 'ion-checkmark', 'ion-checkmark-circled',
      'ion-close-round', 'ion-plus-round', 'ion-minus-round', 'ion-information', 'ion-help',
      'ion-backspace-outline', 'ion-help-buoy', 'ion-asterisk', 'ion-alert', 'ion-alert-circled',
      'ion-refresh', 'ion-loop', 'ion-shuffle', 'ion-home', 'ion-search', 'ion-flag', 'ion-star',
      'ion-heart', 'ion-heart-broken', 'ion-gear-a', 'ion-gear-b', 'ion-toggle-filled', 'ion-toggle',
      'ion-settings', 'ion-wrench', 'ion-hammer', 'ion-edit', 'ion-trash-a', 'ion-trash-b',
      'ion-document', 'ion-document-text', 'ion-clipboard', 'ion-scissors', 'ion-funnel',
      'ion-bookmark', 'ion-email', 'ion-email-unread', 'ion-folder', 'ion-filing', 'ion-archive',
      'ion-reply', 'ion-reply-all', 'ion-forward',
    ],

    fontAwesome: [
      'fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 'fa fa-arrows-h',
      'fa fa-arrows-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-automobile', 'fa fa-ban', 'fa fa-bank',
      'fa fa-bar-chart', 'fa fa-bar-chart-o', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer',
      'fa fa-bell', 'fa fa-bell-o', 'fa fa-bell-slash', 'fa fa-bell-slash-o', 'fa fa-bicycle', 'fa fa-binoculars',
      'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'fa fa-bookmark-o',
      'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'fa fa-building-o', 'fa fa-bullhorn',
    ],
  };

}
