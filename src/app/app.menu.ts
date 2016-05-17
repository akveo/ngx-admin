export const menuItems = [
  {
    title: 'Dashboard',
    component: 'Dashboard',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 0
  },
  {
    title: 'UI Features',
    component: 'Ui',
    icon: 'ion-android-laptop',
    selected: false,
    expanded: false,
    order: 200,
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
    title: 'Maps',
    component: 'Maps',
    icon: 'ion-ios-location-outline',
    selected: false,
    expanded: false,
    order: 300,
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
    title: 'Charts',
    component: 'Charts',
    icon: 'ion-stats-bars',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Chartist.Js',
        component: 'ChartistJs',
      },
    ]
  },
  {
    title: 'Form Elements',
    component: 'Forms',
    icon: 'ion-compose',
    selected: false,
    expanded: false,
    order: 500,
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
    icon: 'ion-grid',
    selected: false,
    expanded: false,
    order: 600,
    subMenu: [
      {
        title: 'Basic Tables',
        component: 'BasicTables',
      }
    ]
  },
  {
    title: 'Menu Level 1',
    icon: 'ion-ios-more',
    selected: false,
    expanded: false,
    subMenu: [
      {
        title: 'Menu Level 1.1',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true,
          selected: false,
          expanded: false
        }]
      }
    ]
  }
];
