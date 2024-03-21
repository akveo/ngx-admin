import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
    hidden: true
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Create',
    icon: 'layout-outline',
    children: [
      {
        title: 'Resume',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Cover Letter',
        link: '',
      }
    ],
  },
  {
    title: 'AI',
    icon: 'keypad-outline',
    children: [
      {
        title: 'AI Resume',
        link: '',
      },
      {
        title: 'AI Cover Letter',
        link: '',
      }
    ],
  },
 
];
