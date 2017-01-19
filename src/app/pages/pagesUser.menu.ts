export const PAGES_MENU_USER = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'device',
        data: {
          menu: {
            title: 'Devices',
            icon: 'ion-android-phone-portrait',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'myDevices',
            data: {
              menu: {
                title: 'My Devices',
              }
            }
          }
        ]
      },
      {
        path: 'claimDevice',
        data: {
          menu: {
            title: 'Claim Devices',
            icon: 'ion-ios-personadd'
          }
        }
      }
    ]
  }
];
