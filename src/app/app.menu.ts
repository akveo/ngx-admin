export const menuItems = [
  {
    title: 'Dashboard',
    path: '/pages/dashboard',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 0
  },
  {
    title: 'Editors',
    path: '/pages/editors',
    icon: 'ion-edit',
    selected: false,
    expanded: false,
    order: 100,
    subMenu: [
      {
        title: 'CKEditor',
        path: '/ckeditor',
      }
    ]
  },
  {
    title: 'Charts',
    path: '/pages/charts',
    icon: 'ion-stats-bars',
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
    icon: 'ion-android-laptop',
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
    icon: 'ion-compose',
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
    icon: 'ion-grid',
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
    icon: 'ion-ios-location-outline',
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
    icon: 'ion-document',
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
    icon: 'ion-ios-more',
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
