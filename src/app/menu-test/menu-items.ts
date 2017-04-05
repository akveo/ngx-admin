import { NgaMenuItem } from '../../framework/theme/components/menu/menu.options';

export const menuItems: Array<NgaMenuItem> = [
  {
    title: 'Menu #1',
    url: '/menu/menu1',
  },
  {
    title: 'Menu #2',
    url: '/menu/menu2',
    icon: 'ion ion-ionic',
  },
  {
    title: 'Menu #3',
    children: [
      {
        title: 'Menu #3.1',
        url: '/menu/menu3/menu31',
        icon: 'ion ion-heart',
      },
      {
        title: 'Menu #3.2',
        url: '/menu/menu3/menu32',
      },
      {
        title: 'Menu #3.3',
        icon: 'ion ion-icecream',
        children: [
          {
            title: 'Menu #3.3.1',
            url: '/menu/menu3/menu33/menu331',
          },
          {
            title: 'Menu #3.3.2',
            url: '/menu/menu3/menu33/menu332',
            icon: 'ion ion-happy-outline',
          },
          {
            title: 'Menu #3.3.3',
            url: '/menu/menu3/menu33/menu333',
          },
        ],
      },
    ],
  },
];
