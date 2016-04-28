import {Injectable} from 'angular2/core';

@Injectable()
export class SidebarService {

  staticMenuItems = [
    {
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [
        {
          title: 'Sign In',
          root: 'auth.html',
          blank: true
        },
        {
          title: 'Sign Up',
          root: 'reg.html',
          blank: true
        },
        {
          title: 'User Profile',
          root: '#/profile'
        },
        {
          title: '404 Page',
          root: '404.html',
          blank: true
        }
      ]
    },
    {
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [
        {
          title: 'Menu Level 1.1',
          root: '#',
          disabled: true
        },
        {
          title: 'Menu Level 1.2',
          subMenu: [{
            title: 'Menu Level 1.2.1',
            root: '#',
            disabled: true
          }]
        }
      ]
    }];

  getMenuItems() {
    var states = this.defineMenuItemStates();
    var menuItems = states.filter(function(item) {
      return item.level == 0;
    });

    menuItems.forEach(function(item) {
      var children = states.filter(function(child) {
        return child.level == 1 && child.name.indexOf(item.name) === 0;
      });
      item.subMenu = children.length ? children : null;
    });

    return menuItems.concat(this.staticMenuItems);
  };

  defineMenuItemStates() {

    // TODO mock state object
    var state = [{
      name: 'dashboard',
      title: 'Dashboard',
      selected: true,
      url: '/pages/dashboard',
      templateUrl: 'app/pages/dashboard/dashboard.html',
      sidebarMeta: {
        icon: 'ion-android-home',
        order: 0,
      }
    }];

    return state
      .filter(function(s) {
        return s.sidebarMeta != null;
      })
      .map(function(s) {
        var meta = s.sidebarMeta;
        return {
          name: s.name,
          title: s.title,
          level: (s.name.match(/\./g) || []).length,
          order: meta.order,
          icon: meta.icon,
          root: '#/' + s.name.replace('.', '/'),
        };
      })
      .sort(function(a, b) {
        return (a.level - b.level) * 100 + a.order - b.order;
      });
  }
}
