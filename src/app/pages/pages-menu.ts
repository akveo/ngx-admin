import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'OPERACIONES',
    group: true,
  },
  {
    title: 'Formularios',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Entradas de Formulario',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Diseños de Formulario',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Botones',
        link: '/pages/forms/buttons',
      },
    ],
  },
  {
    title: 'Tablas y Datos',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'SOPORTE',
    group: true,
  },
  {
    title: 'Misceláneo',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: 'Error 404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
];
