import { List } from 'immutable';

import { NgaMenuItem } from '../../framework/theme/components/menu/menu.options';

export const menuItems: List<NgaMenuItem> = List([
  {
    title: 'Menu Items',
    group: true,
  },
  {
    title: 'Menu #1',
    link: '/menu/1',
  },
  {
    title: 'Menu #2',
    link: '/menu/2',
    icon: 'ion ion-ionic',
  },
  {
    title: 'Menu #3',
    children: List([
      {
        title: 'Menu #3.1',
        link: '/menu/3/1',
        icon: 'ion ion-heart',
      },
      {
        title: 'Menu #3.2',
        link: '/menu/3/2',
      },
      {
        title: 'Menu #3.3',
        icon: 'ion ion-icecream',
        children: List([
          {
            title: 'Menu #3.3.1',
            link: '/menu/3/3/1',
          },
          {
            title: 'Menu #3.3.2',
            link: '/menu/3/3/2',
            icon: 'ion ion-happy-outline',
            home: true,
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
    link: '/menu/4',
    icon: 'ion ion-ionic',
  },
  {
    title: 'Menu #5',
    icon: 'ion ion-ionic',
  },
]);
