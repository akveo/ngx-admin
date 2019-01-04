import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MainFlux',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MANAGEMENT',
    group: true,
  },
  {
    title: 'Admin',
    icon: 'nb-tables',
    children: [
      {
        title: 'Things',
        link: '/pages/mainflux/things',
      },
      {
        title: 'Channels',
        link: '/pages/mainflux/channels',
      },
    ],
  },
  {
    title: 'Lora',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Config',
        link: '/pages/lora',
      },
      {
        title: 'Monitor',
        link: '/pages/lora',
      },
    ],
  },
  { 
    title: 'Super Admin',
    icon: 'nb-gear',
    children: [
      { 
        title: 'Users',
        link: '/pages/tables/things',
      },
      { 
        title: 'Config',
        link: '/pages/tables/channels',
      },
    ],
  },
];
