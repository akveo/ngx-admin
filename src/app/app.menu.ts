export const menuItems = [
  {
    title: 'Dashboard',
    component: 'Dashboard',
    icon: 'fa fa-home',
    selected: false,
    expanded: false,
    order: 0
  },
  {
    title: 'Charts',
    component: 'Charts',
    icon: 'fa fa-bar-chart',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [
      {
        title: 'Chartist.Js',
        component: 'ChartistJs',
      },
    ]
  },
  {
    title: 'UI Features',
    component: 'Ui',
    icon: 'fa fa-laptop',
    selected: false,
    expanded: false,
    order: 300,
    subMenu: [
      {
        title: 'Typography',
        component: 'Typography',
      },
      {
        title: 'Buttons',
        component: 'Buttons',
      },
      {
        title: 'Icons',
        component: 'Icons',
      },
      {
        title: 'Grid',
        component: 'Grid',
      },
    ]
  },
  {
    title: 'Form Elements',
    component: 'Forms',
    icon: 'fa fa-pencil-square-o',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Form Inputs',
        component: 'Inputs',
      },
      {
        title: 'Form Layouts',
        component: 'Layouts',
      },
    ]
  },
  {
    title: 'Tables',
    component: 'Tables',
    icon: 'fa fa-table',
    selected: false,
    expanded: false,
    order: 500,
    subMenu: [
      {
        title: 'Basic Tables',
        component: 'BasicTables',
      }
    ]
  },
  {
    title: 'Maps',
    component: 'Maps',
    icon: 'fa fa-map-marker',
    selected: false,
    expanded: false,
    order: 600,
    subMenu: [
      {
        title: 'Google Maps',
        component: 'GoogleMaps',
      },
      {
        title: 'Leaflet Maps',
        component: 'LeafletMaps',
      },
      {
        title: 'Bubble Maps',
        component: 'BubbleMaps',
      },
      {
        title: 'Line Maps',
        component: 'LineMaps',
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
