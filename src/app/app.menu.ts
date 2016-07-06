export const menuItems = [
  {
    title: 'Dashboard',
    path: '/pages/dashboard',
    icon: 'fa fa-home',
    selected: false,
    expanded: false,
    order: 0
  },
  {
    title: 'Charts',
    path: '/pages/charts',
    icon: 'fa fa-bar-chart',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [
      {
        title: 'Chartist.Js',
        path: '/chartist-js',
      },
    ]
  },
  {
    title: 'UI Features',
    path: '/pages/ui',
    icon: 'fa fa-laptop',
    selected: false,
    expanded: false,
    order: 300,
    subMenu: [
      {
        title: 'Typography',
        path: '/typography',
      },
      {
        title: 'Buttons',
        path: '/buttons',
      },
      {
        title: 'Icons',
        path: '/icons',
      },
      {
        title: 'Grid',
        path: '/grid',
      },
    ]
  },
  {
    title: 'Form Elements',
    path: '/pages/forms',
    icon: 'fa fa-pencil-square-o',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Form Inputs',
        path: '/inputs',
      },
      {
        title: 'Form Layouts',
        path: '/layouts',
      },
    ]
  },
  {
    title: 'Tables',
    path: '/pages/tables',
    icon: 'fa fa-table',
    selected: false,
    expanded: false,
    order: 500,
    subMenu: [
      {
        title: 'Basic Tables',
        path: '/basictables',
      }
    ]
  },
  {
    title: 'Maps',
    path: '/pages/maps',
    icon: 'fa fa-map-marker',
    selected: false,
    expanded: false,
    order: 600,
    subMenu: [
      {
        title: 'Google Maps',
        path: '/googlemaps',
      },
      {
        title: 'Leaflet Maps',
        path: '/leafletmaps',
      },
      {
        title: 'Bubble Maps',
        path: '/bubblemaps',
      },
      {
        title: 'Line Maps',
        path: '/linemaps',
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
        path: '/login',
      },
      {
        title: 'Register',
        path: '/register',
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
