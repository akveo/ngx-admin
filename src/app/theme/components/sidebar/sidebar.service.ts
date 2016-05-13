import {Injectable} from '@angular/core';

@Injectable()
export class SidebarService {

  staticMenuItems = [
    {
      title: 'Dashboard',
      name: 'Dashboard',
      icon: 'ion-android-home',
      selected: false,
      expanded: false,
      order: 0
    },
    {
      title: 'UI Features',
      name: 'Ui',
      icon: 'ion-android-laptop',
      selected: false,
      expanded: false,
      order: 200,
      subMenu: [
        {
          title: 'Typography',
          name: 'Typography',
        },
        {
          title: 'Buttons',
          name: 'Buttons',
        },
        {
          title: 'Icons',
          name: 'Icons',
        },
        {
          title: 'Grid',
          name: 'Grid',
        },
      ]
    },
    {
      title: 'Maps',
      name: 'Maps',
      icon: 'ion-ios-location-outline',
      selected: false,
      expanded: false,
      order: 300,
      subMenu: [
        {
          title: 'Google Maps',
          name: 'GoogleMaps',
        },
        {
          title: 'Leaflet Maps',
          name: 'LeafletMaps',
        },
        {
          title: 'Bubble Maps',
          name: 'BubbleMaps',
        },
        {
          title: 'Line Maps',
          name: 'LineMaps',
        }
      ]
    },
    {
      title: 'Charts',
      name: 'Charts',
      icon: 'ion-stats-bars',
      selected: false,
      expanded: false,
      order: 400,
      subMenu: [
        // {
        //   title: 'Chart Js',
        //   name: 'ChartJs',
        // },
        {
          title: 'ChartistJs',
          name: 'ChartistJs',
        },
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

  constructor() {
  }

  getMenuItems() {
    return this.staticMenuItems;
  }
}
