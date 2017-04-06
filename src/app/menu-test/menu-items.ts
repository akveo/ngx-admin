import { List } from 'immutable';

import { NgaMenuItem } from '../../framework/theme/components/menu/menu.options';

export const menuItems: List<NgaMenuItem> = List([
  {
    title: 'Menu #1',
    link: '#/menu/menu1',
  },
  {
    title: 'Menu #2',
    link: '#/menu/menu2',
    icon: 'ion ion-ionic',
  },
  {
    title: 'Menu #3',
    children: List([
      {
        title: 'Menu #3.1',
        link: '#/menu/menu3/menu31',
        icon: 'ion ion-heart',
      },
      {
        title: 'Menu #3.2',
        link: '#/menu/menu3/menu32',
      },
      {
        title: 'Menu #3.3',
        icon: 'ion ion-icecream',
        children: List([
          {
            title: 'Menu #3.3.1',
            link: '#/menu/menu3/menu33/menu331',
          },
          {
            title: 'Menu #3.3.2',
            link: '#/menu/menu3/menu33/menu332',
            icon: 'ion ion-happy-outline',
          },
          {
            title: '@nga/theme',
            target: '_blank',
            url: 'https://github.com/akveo/ng2-admin',
          },
        ]),
      },
    ]),
  },
  {
    title: 'Menu #4',
    link: '#/menu/menu2',
    icon: 'ion ion-ionic',
  },
]);
