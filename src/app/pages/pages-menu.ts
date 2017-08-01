import { NbMenuItem } from '@nebular/theme';

import { List } from 'immutable';

export const MENU_ITEMS: List<NbMenuItem> = List([{
  title: 'Dashboard',
  icon: 'ion ion-ios-home-outline',
  link: '/pages/dashboard',
  home: true,
}, {
  title: 'FEATURES',
  group: true,
}, {
  title: 'UI Features',
  icon: 'ion ion-ios-keypad-outline',
  link: '/pages/ui-features',
  children: List<NbMenuItem>([{
    title: 'Buttons',
    link: '/pages/ui-features/buttons',
  }, {
    title: 'Grid',
    link: '/pages/ui-features/grid',
  }, {
    title: 'Icons',
    link: '/pages/ui-features/icons',
  }, {
    title: 'Modals',
    link: '/pages/ui-features/modals',
  }, {
    title: 'Typography',
    link: '/pages/ui-features/typography',
  }, {
    title: 'Animated Searches',
    link: '/pages/ui-features/search-fields',
  }, {
    title: 'Tabs',
    link: '/pages/ui-features/tabs',
  }]),
}, {
  title: 'Forms',
  icon: 'ion-compose',
  children: List<NbMenuItem>([{
    title: 'Form Inputs',
    link: '/pages/forms/inputs',
  }, {
    title: 'Form Layouts',
    link: '/pages/forms/layouts',
  }]),
}, {
  title: 'Components',
  icon: 'ion ion-ios-gear-outline',
  children: List<NbMenuItem>([{
    title: 'Tree',
    link: '/pages/components/tree',
  }, {
    title: 'Notifications',
    link: '/pages/components/notifications',
  }]),
}, {
  title: 'Maps',
  icon: 'ion ion-ios-location-outline',
  children: List<NbMenuItem>([{
    title: 'Google Maps',
    link: '/pages/maps/gmaps',
  }, {
    title: 'Leaflet Maps',
    link: '/pages/maps/leaflet',
  }, {
    title: 'Bubble Maps',
    link: '/pages/maps/bubble',
  }]),
}, {
  title: 'Charts',
  icon: 'ion ion-arrow-graph-up-right',
  children: List<NbMenuItem>([{
    title: 'Echarts',
    link: '/pages/charts/echarts',
  }, {
    title: 'D3',
    link: '/pages/charts/d3',
  }, {
    title: 'Charts.js',
    link: '/pages/charts/chartjs',
  }]),
}, {
  title: 'Editors',
  icon: 'ion ion-edit',
  children: List<NbMenuItem>([{
    title: 'TinyMCE',
    link: '/pages/editors/tinymce',
  }, {
    title: 'CKEditor',
    link: '/pages/editors/ckeditor',
  }]),
}, {
  title: 'Tables',
  icon: 'ion-ios-grid-view',
  children: List<NbMenuItem>([{
    title: 'Smart Table',
    link: '/pages/tables/smart-table',
  }]),
}]);
