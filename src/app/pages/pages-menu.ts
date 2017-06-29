import { NgaMenuItem } from '@akveo/nga-theme';

import { List } from 'immutable';

// TODO: refactor array styles
export const menuItems: List<NgaMenuItem> = List([{
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
  children: List<NgaMenuItem>([{
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
  },
  {
    title: 'Tabs',
    link: '/pages/ui-features/tabs',
  }]),
}, {
  title: 'Components',
  icon: 'ion ion-ios-gear-outline',
  children: List<NgaMenuItem>([
    {
      title: 'Tree',
      link: '/pages/components/tree',
    }, {
      title: 'Toaster',
      link: '/pages/components/toaster',
    },
  ]),
}, {
  title: 'Maps',
  icon: 'ion ion-ios-location-outline',
  children: List<NgaMenuItem>([{
    title: 'Gmaps',
    link: '/pages/maps/gmaps',
  }, {
    title: 'Leaflet',
    link: '/pages/maps/leaflet',
  }]),
}, {
  title: 'Charts',
  icon: 'ion ion-arrow-graph-up-right',
  children: List<NgaMenuItem>([{
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
  children: List<NgaMenuItem>([{
    title: 'TinyMCE',
    link: '/pages/editors/tinymce',
  }, {
    title: 'CKEditor',
    link: '/pages/editors/ckeditor',
  }]),
}, {
  title: 'Forms',
  icon: 'ion-compose',
  children: List<NgaMenuItem>([{
    title: 'Form Inputs',
    link: '/pages/forms/inputs',
  }]),
}, {
  title: 'Tables',
  icon: 'ion-ios-grid-view',
  children: List<NgaMenuItem>([{
    title: 'Smart Table',
    link: '/pages/tables/smart-table',
  }]),
}]);
