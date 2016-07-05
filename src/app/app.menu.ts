export const menuItems = [
  {
    title: 'Dashboard',
    component: 'dashboard',
    icon: 'fa fa-home',
    selected: false,
    expanded: false,
    order: 0
  },
  {
    title: 'Charts',
    component: 'charts',
    icon: 'fa fa-bar-chart',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [
      {
        title: 'Chartist.Js',
        component: 'chartist-js',
      },
    ]
  },
  {
    title: 'UI Features',
    component: 'ui',
    icon: 'fa fa-laptop',
    selected: false,
    expanded: false,
    order: 300,
    subMenu: [
      {
        title: 'Typography',
        component: 'typography',
      },
      {
        title: 'Buttons',
        component: 'buttons',
      },
      {
        title: 'Icons',
        component: 'icons',
      },
      {
        title: 'Grid',
        component: 'grid',
      },
    ]
  },
  {
    title: 'Form Elements',
    component: 'forms',
    icon: 'fa fa-pencil-square-o',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Form Inputs',
        component: 'inputs',
      },
      {
        title: 'Form Layouts',
        component: 'layouts',
      },
    ]
  },
  {
    title: 'Tables',
    component: 'tables',
    icon: 'fa fa-table',
    selected: false,
    expanded: false,
    order: 500,
    subMenu: [
      {
        title: 'Basic Tables',
        component: 'basictables',
      }
    ]
  },
  {
    title: 'Maps',
    component: 'maps',
    icon: 'fa fa-map-marker',
    selected: false,
    expanded: false,
    order: 600,
    subMenu: [
      {
        title: 'Google Maps',
        component: 'googlemaps',
      },
      {
        title: 'Leaflet Maps',
        component: 'leafletmaps',
      },
      {
        title: 'Bubble Maps',
        component: 'bubblemaps',
      },
      {
        title: 'Line Maps',
        component: 'linemaps',
      }
    ]
  },
  {
    title: 'Pages',
    icon: 'fa fa-sticky-note',
    selected: false,
    expanded: false,
    order: 650,
    subMenu: [
      {
        title: 'Login',
        url: '#/login',
      },
      {
        title: 'Register',
        url: '#/register',
      }
    ]
  },
  {
    title: 'Menu Level 1',
    icon: 'fa fa-level-down',
    selected: false,
    expanded: false,
    order: 700,
    subMenu: [
      {
        title: 'Menu Level 1.1',
        url: '#',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Menu Level 1.2',
        url: '#',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      }
    ]
  },
  {
    title: 'External Link',
    url: 'http://akveo.com',
    icon: 'ion-android-exit',
    selected: false,
    expanded: false,
    order: 800,
    target: '_blank'
  }
];
