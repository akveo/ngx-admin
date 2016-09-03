import { Injectable } from '@angular/core';
import { Http, Request, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class MenuService {

  constructor(private http:Http) {
  }

  public get():any[] {

    return [
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
            path: 'reports',
            data: {
              menu: {
                title: '报表',
                icon: 'ion-android-home',
                selected: false,
                expanded: false,
                order: 0
              }
            },
            children: [
              {
                path: 'gfChannelDau',
                data: {
                  menu: {
                    title: '官方平台DAU',
                  }
                }
              }
            ]
          },
          {
            path: 'editors',
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
                data: {
                  menu: {
                    title: 'CKEditor',
                  }
                }
              }
            ]
          },
          {
            path: 'components',
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
                data: {
                  menu: {
                    title: 'Tree View',
                  }
                }
              }
            ]
          },
          {
            path: 'charts',
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
                data: {
                  menu: {
                    title: 'Chartist.Js',
                  }
                }
              }
            ]
          },
          {
            path: 'ui',
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
                data: {
                  menu: {
                    title: 'Typography',
                  }
                }
              },
              {
                path: 'buttons',
                data: {
                  menu: {
                    title: 'Buttons',
                  }
                }
              },
              {
                path: 'icons',
                data: {
                  menu: {
                    title: 'Icons',
                  }
                }
              },
              {
                path: 'grid',
                data: {
                  menu: {
                    title: 'Grid',
                  }
                }
              },
            ]
          },
          {
            path: 'forms',
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
                data: {
                  menu: {
                    title: 'Form Inputs',
                  }
                }
              },
              {
                path: 'layouts',
                data: {
                  menu: {
                    title: 'Form Layouts',
                  }
                }
              }
            ]
          },
          {
            path: 'tables',
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
                data: {
                  menu: {
                    title: 'Basic Tables',
                  }
                }
              },
              {
                path: 'smarttables',
                data: {
                  menu: {
                    title: 'Smart Tables',
                  }
                }
              }
            ]
          },
          {
            path: 'maps',
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
                data: {
                  menu: {
                    title: 'Google Maps',
                  }
                }
              },
              {
                path: 'leafletmaps',
                data: {
                  menu: {
                    title: 'Leaflet Maps',
                  }
                }
              },
              {
                path: 'bubblemaps',
                data: {
                  menu: {
                    title: 'Bubble Maps',
                  }
                }
              },
              {
                path: 'linemaps',
                data: {
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
                  menu: {
                    title: 'Menu Level 1.1',
                    url: '#'
                  }
                }
              },
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2',
                    url: '#'
                  }
                },
                children: [
                  {
                    path: '',
                    data: {
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
            path: '',
            data: {
              menu: {
                title: 'External Link',
                url: 'http://akveo.com',
                icon: 'ion-android-exit',
                order: 800,
                target: '_blank'
              }
            }
          }
        ]
      }
    ];
  }
}
