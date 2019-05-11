import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_EN: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Extra Components',
    icon: 'nb-star',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Stepper',
        link: '/pages/extra-components/stepper',
      },
      {
        title: 'List',
        link: '/pages/extra-components/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/extra-components/infinite-list',
      },
      {
        title: 'Form Inputs',
        link: '/pages/extra-components/form-inputs',
      },
      {
        title: 'Accordion',
        link: '/pages/extra-components/accordion',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Tree',
        link: '/pages/extra-components/tree',
      },
      {
        title: 'Tabs',
        link: '/pages/extra-components/tabs',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Bootstrap',
    icon: 'nb-gear',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/bootstrap/inputs',
      },
      {
        title: 'Buttons',
        link: '/pages/bootstrap/buttons',
      },
      {
        title: 'Modal',
        link: '/pages/bootstrap/modal',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];

export const MENU_ITEMS_AR: NbMenuItem[] = [
  {
    title: 'لوحة التحكم',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'المميزات',
    group: true,
  },
  {
    title: 'واجهة المستخدم',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'الزراير',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'الجريد',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'الايقونات',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'الصفحات القصيرة',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'بوب آوفر',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'التوبوغرافيا والخطوط',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'البحث الحركي',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'التبويبات',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'الاستمارات',
    icon: 'nb-compose',
    children: [
      {
        title: 'مدخلات الاستمارة',
        link: '/pages/forms/inputs',
      },
      {
        title: 'اشكال الاستمارة',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'المكونات',
    icon: 'nb-gear',
    children: [
      {
        title: 'الشجرة',
        link: '/pages/components/tree',
      }, {
        title: 'التنبيهات',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'الخرائط',
    icon: 'nb-location',
    children: [
      {
        title: 'خرائط جوجل',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'خرائط ورقية',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'خرائط فقاعية',
        link: '/pages/maps/bubble',
      },
      {
        title: 'خرائط بحثية',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'الرسوم البيانية',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'الرسوم البيانيه الالكترونية',
        link: '/pages/charts/echarts',
      },
      {
        title: 'رسوم بيانية chart.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'رسوم بيانيه ثلاثية الابعاد',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'المحررات',
    icon: 'nb-title',
    children: [
      {
        title: 'المحرر الصغير',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'محرر سيكا',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'الجداول',
    icon: 'nb-tables',
    children: [
      {
        title: 'الجداول الذكية',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'جوانب',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'التحقق',
    icon: 'nb-locked',
    children: [
      {
        title: 'تسجيل الدخول',
        link: '/auth/login',
      },
      {
        title: 'انشاء حساب',
        link: '/auth/register',
      },
      {
        title: 'تعيين كلمة السر',
        link: '/auth/request-password',
      },
      {
        title: 'استعادة كلمة السر',
        link: '/auth/reset-password',
      },
    ],
  },
];

