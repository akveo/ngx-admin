// import { NbMenuItem } from '@nebular/theme';
import { MenuItem } from './menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    key: 'dashboard',
  },
  {
    title: 'Inscripcion',
    icon: 'nb-tables',
    link: '/pages/inscripcion',
    key: 'inscription',
    children: [
      {
        title: 'Mockup registro',
        link: '/pages/inscripcion/registro',
        key: 'mockup-register',
      },
      {
        title: 'Mockup inscripcion',
        link: '/pages/inscripcion/forms',
        key: 'mockup-inscription',
      },
      {
        title: 'Mockup estado inscripciones',
        link: '/pages/inscripcion/estado-inscripciones',
        key: 'mockup-inscription-state',
      },
      {
        title: 'Mockup consultar aspirantes',
        link: '/pages/inscripcion/ver-aspirantes',
        key: 'mockup-candidate-query',
      },
      {
        title: 'Mockup ver información aspirante',
        link: '/pages/inscripcion/ver-informacion-aspirante',
        key: 'mockup-candidate-information',
      },
      {
        title: 'Mockup asignar docente entrevistador',
        link: '/pages/inscripcion/asignar-entrevistador',
        key: 'mockup-choose-interviewer',
      },
    ],
  },
  {
    title: 'Inscripciones',
    icon: 'nb-compose',
    link: '/pages/inscripciones',
    key: 'inscriptions',
    children: [
      {
        title: 'Posgrados',
        link: '/pages/inscripciones/posgrado',
        key: 'postgraduate',
      },
      {
        title: 'Perfil',
        link: '/pages/inscripciones/info-basica',
      },
    ],
  },
  {
    title: 'Certificados',
    icon: 'nb-compose',
    link: '/pages/certificados',
    key: 'certificates',
    children: [
      {
        title: 'Prueba QR',
        link: '/pages/certificados/prueba-qr',
      },
    ],
  },
  // {
  //   title: 'UI Features',
  //   icon: 'nb-keypad',
  //   link: '/pages/ui-features',
  //   key: 'ui-features',
  //   children: [
  //     {
  //       title: 'Buttons',
  //       link: '/pages/ui-features/buttons',
  //       key: 'buttons',
  //     },
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //       key: 'grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //       key: 'icons',
  //     },
  //     {
  //       title: 'Modals',
  //       link: '/pages/ui-features/modals',
  //       key: 'modals',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //       key: 'typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //       key: 'animated-searches',
  //     },
  //     {
  //       title: 'Tabs',
  //       link: '/pages/ui-features/tabs',
  //       key: 'tabs',
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: 'nb-compose',
  //   key: 'forms',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //       key: 'form-inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //       key: 'form-layouts',
  //     },
  //   ],
  // },
  // {
  //   title: 'Components',
  //   icon: 'nb-gear',
  //   key: 'components',
  //   children: [
  //     {
  //       title: 'Tree',
  //       link: '/pages/components/tree',
  //       key: 'tree',
  //     }, {
  //       title: 'Notifications',
  //       link: '/pages/components/notifications',
  //       key: 'notifications',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'nb-location',
  //   key: 'maps',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //       key: 'google-maps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //       key: 'leaflet-maps',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //       key: 'bubble-maps',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   key: 'charts',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //       key: 'echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //       key: 'charts-js',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //       key: 'd3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   key: 'editors',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //       key: 'tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //       key: 'ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   key: 'tables',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //       key: 'smart-table',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   key: 'auth',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //       key: 'login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //       key: 'register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //       key: 'request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //       key: 'reset-password',
  //     },
  //   ],
  // },
];
