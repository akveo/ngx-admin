import {Injectable} from 'angular2/core';

@Injectable()
export class SidebarService {

  staticMenuItems = [
    {
      title: 'Pages',
      icon: 'ion-document',
      selected: false,
      expanded: false,
      subMenu: [
        {
          title: 'Sign In',
          // name: 'SignIn',
          blank: true
        },
        {
          title: 'Sign Up',
          // name: 'SignUp',
          blank: true
        },
        {
          title: 'User Profile',
          // name: 'UserProfile'
        },
        {
          title: '404 Page',
          // name: 'NotFound',
          blank: true
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
  }];

  constructor() { }

  getMenuItems(routes) {

    let menuItems = routes.configs
      .filter(function(s) {
        return s.data.sidebarMeta != null;
      })
      .map(function(s) {
        var meta = s.data.sidebarMeta;
        return {
          title: s.data.title,
          name: s.name,
          level: 0,
          order: meta.order,
          icon: meta.icon
        };
      })
      .sort(function(a, b) {
        return (a.level - b.level) * 100 + a.order - b.order;
      })
      .filter(function(item) {
        return item.level == 0;
      });

    return menuItems.concat(this.staticMenuItems);
  }
}
