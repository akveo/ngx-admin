import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-icons',
  styleUrls: ['./icons.component.scss'],
  templateUrl: './icons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {

  evaIcons = [];

  constructor(iconsLibrary: NbIconLibraries) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('nebular', { iconClassPrefix: 'nb' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }

  icons = {

    nebular: ['alert', 'angle-double-left', 'angle-double-right',
      'arrow-down', 'arrow-dropdown', 'arrow-dropleft',
      'arrow-dropright', 'arrow-dropup', 'arrow-left', 'arrow-retweet', 'arrow-right',
      'arrow-thin-down', 'arrow-thin-left', 'arrow-thin-right', 'arrow-thin-up',
      'arrow-up', 'audio', 'bar-chart', 'checkmark', 'chevron-down',
      'chevron-down-outline', 'chevron-left', 'chevron-left-outline', 'chevron-right',
      'chevron-right-outline', 'chevron-up', 'chevron-up-outline', 'close',
      'close-circled', 'cloudy', 'coffee-maker', 'compose', 'edit', 'email',
      'flame-circled', 'gear', 'grid-a', 'grid-a-outline', 'grid-b', 'grid-b-outline',
      'heart', 'home', 'keypad', 'layout-centre', 'layout-default', 'layout-one-column',
      'layout-sidebar-left', 'layout-sidebar-right', 'layout-two-column', 'lightbulb',
      'list', 'location', 'locked', 'loop', 'loop-circled', 'menu', 'notifications',
      'paper-plane', 'partlysunny', 'pause', 'pause-outline', 'person', 'phone',
      'play', 'play-outline', 'plus', 'plus-circled', 'power', 'power-circled',
      'rainy', 'roller-shades', 'search', 'shuffle', 'skip-backward',
      'skip-backward-outline', 'skip-forward', 'skip-forward-outline', 'snowy-circled',
      'square', 'square-outline', 'star', 'sunny', 'sunny-circled', 'tables', 'title',
      'trash', 'volume-high', 'volume-mute', 'drop', 'drops', 'info', 'expand', 'collapse',
      'e-commerce', 'danger', 'checkmark-circle', 'help'],

    ionicons: [
      'ionic', 'arrow-right-b', 'arrow-down-b', 'arrow-left-b', 'arrow-up-c', 'arrow-right-c',
      'arrow-down-c', 'arrow-left-c', 'arrow-return-right', 'arrow-return-left', 'arrow-swap',
      'arrow-shrink', 'arrow-expand', 'arrow-move', 'arrow-resize', 'chevron-up',
      'chevron-right', 'chevron-down', 'chevron-left', 'navicon-round', 'navicon',
      'drag', 'log-in', 'log-out', 'checkmark-round', 'checkmark', 'checkmark-circled',
      'close-round', 'plus-round', 'minus-round', 'information', 'help',
      'backspace-outline', 'help-buoy', 'asterisk', 'alert', 'alert-circled',
      'refresh', 'loop', 'shuffle', 'home', 'search', 'flag', 'star',
      'heart', 'heart-broken', 'gear-a', 'gear-b', 'toggle-filled', 'toggle',
      'settings', 'wrench', 'hammer', 'edit', 'trash-a', 'trash-b',
      'document', 'document-text', 'clipboard', 'scissors', 'funnel',
      'bookmark', 'email', 'email-unread', 'folder', 'filing', 'archive',
      'reply', 'reply-all', 'forward',
    ],

    fontAwesome: [
      'adjust', 'anchor', 'archive', 'chart-area', 'arrows-alt', 'arrows-alt-h',
      'arrows-alt-v', 'asterisk', 'at', 'car', 'ban', 'university',
      'chart-bar', 'far fa-chart-bar', 'barcode', 'bars', 'bed', 'beer',
      'bell', 'far fa-bell', 'bell-slash', 'far fa-bell-slash', 'bicycle', 'binoculars',
      'birthday-cake', 'bolt', 'bomb', 'book', 'bookmark', 'far fa-bookmark',
      'briefcase', 'bug', 'building', 'far fa-building', 'bullhorn',
    ],
  };

}
