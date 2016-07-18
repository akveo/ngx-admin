import {RouterConfig} from '@angular/router';
import {Dashboard} from './dashboard/dashboard.component';
import {Charts} from './charts/charts.component';
import {ChartistJs} from './charts/components/chartistJs/chartistJs.component';
import {Pages} from './pages.component';
import {Ui} from './ui/ui.component';
import {Typography} from './ui/components/typography/typography.component';
import {Buttons} from './ui/components/buttons/buttons.component';
import {Icons} from './ui/components/incons/icons.component';
import {Grid} from './ui/components/grid/grid.component';
import {Forms} from './forms/forms.component';
import {Inputs} from './forms/components/inputs/inputs.component';
import {Layouts} from './forms/components/layouts/layouts.component';
import {BasicTables} from './tables/components/basicTables/basicTables.component';
import {Tables} from './tables/tables.component';
import {Maps} from './maps/maps.component';
import {GoogleMaps} from './maps/components/googleMaps/googleMaps.component';
import {LeafletMaps} from './maps/components/leafletMaps/leafletMaps.component';
import {BubbleMaps} from './maps/components/bubbleMaps/bubbleMaps.component';
import {LineMaps} from './maps/components/lineMaps/lineMaps.component';
import {Editors} from './editors/editors.component';
import {Ckeditor} from './editors/components/ckeditor/ckeditor.component';
import {Components} from './components/components.component';
import {TreeView} from './components/components/treeView/treeView.component';
import {Items} from "./navigate/components/items/items.component";
import {Details} from "./navigate/components/details/details.component";
import {Overdrive} from "./navigate/components/overdrive/overdrive.component";
import {AppGuard} from "../app.guard";

//noinspection TypeScriptValidateTypes
export const PagesRoutes:RouterConfig = [
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        data: {
          page_title: 'Dashboard',
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
        path: 'editors',
        component: Editors,
        data: {
          menu: {
            title: 'Editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            component: Ckeditor,
            data: {
              page_title: 'CKEditor',
              menu: {
                title: 'CKEditor',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        component: Components,
        data: {
          menu: {
            title: 'Components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            component: TreeView,
            data: {
              page_title: 'Tree View',
              menu: {
                title: 'Tree View',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        component: Charts,
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            component: ChartistJs,
            data: {
              page_title: 'Chartist',
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        component: Ui,
        data: {
          menu: {
            title: 'UI Features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            component: Typography,
            data: {
              page_title: 'Typography',
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            component: Buttons,
            data: {
              page_title: 'Buttons',
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'icons',
            component: Icons,
            data: {
              page_title: 'Icons',
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'grid',
            component: Grid,
            data: {
              page_title: 'Grid',
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        component: Forms,
        data: {
          menu: {
            title: 'Form Elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            component: Inputs,
            data: {
              page_title: 'Form Inputs',
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            component: Layouts,
            data: {
              page_title: 'Form Layouts',
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        component: Tables,
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            component: BasicTables,
            data: {
              page_title: 'Basic Tables',
              menu: {
                title: 'Basic Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        component: Maps,
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            component: GoogleMaps,
            data: {
              page_title: 'Google Maps',
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            component: LeafletMaps,
            data: {
              page_title: 'Leaflet Maps',
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            component: BubbleMaps,
            data: {
              page_title: 'Bubble Maps',
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            component: LineMaps,
            data: {
              page_title: 'Line Maps',
              menu: {
                title: 'Line Maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Login',
                url: '#/login'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Register',
                url: '#/register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Menu Level 1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              page_title: 'Menu Level 1.1',
              menu: {
                title: 'Menu Level 1.1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              page_title: 'Menu Level 1.2',
              menu: {
                title: 'Menu Level 1.2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  page_title: 'Menu Level 1.2.1',
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: 'navigate',
        data: {
          menu: {
            title: 'Navigate',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 800,
          }
        },
        children: [
          {
            path: 'items',
            component: Items,
            data: {
              page_title: 'Items',
              menu: {
                title: 'List Items'
              }
            }
          },
          {
            path: 'items/details',
            component: Details,
            data: {
              breadcrumb: [
                {
                  title: 'Items',
                  path: './'
                }
              ],
              page_title: 'Details',
            }
          },
          {
            path: 'items/overdrive',
            component: Overdrive,
            data: {
              page_title: 'Overdrive',
            }
          },
          {
            path: 'items/fail_auth',
            component: Overdrive,
            canActivate: [AppGuard],
            data:{
              permissions: [
                'permission1', 'permission2'
              ]
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'External Link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 900,
            target: '_blank'
          }
        }
      }
    ]
  }
];
