import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

export class Descriptions {
  icon: string;
  title: string;
  description: string;
}

@Injectable()
export class DescriptionsService {

  /* tslint:disable:max-line-length */
  private descriptions: Descriptions[] = [
    {
      icon: 'layout-outline',
      title: 'Efficient',
      description: 'Packed with a huge number of handcrafted UI components, charts, maps, editors, tables, and much more, so that developers can focus on business needs',
    },
    {
      icon: 'smartphone-outline',
      title: 'Mobile first',
      description: 'Looks stunning on every screen size and is optimized to bring the large-screen experience from desktop to mobile',
    },
    {
      icon: 'color-palette-outline',
      title: 'Сustomizable',
      description: 'With 4 themes, 2 dashboards, and outstanding UI architecture, it’s easy to change the themes and find the right fit for your company',
    },
    {
      icon: 'heart-outline',
      title: 'Updated and supported',
      description: 'Continuous updates and fixes from the development team to keep your tech up to date. The friendly and active community support team are ready to guide you through your challenges',
    },
  ];
  private bundleDescriptions: Descriptions[] = [
    {
      icon: 'umbrella-outline',
      title: 'Convenient',
      description: 'Complete pack of well known Angular based ngx-admin template, integrated with Backend Solution of your choice. Finally, you can get fully integrated solution out of the box.',
    },
    {
      icon: 'settings-2-outline',
      title: 'Functional',
      description: 'Deploy it as ready to use solution for a particular case, or give it to your development team to incrementally add functionality. It provides a significant boost and solid development structure.',
    },
    {
      icon: 'clock-outline',
      title: 'Efficient',
      description: 'Save more than $21,000 using Backend Bundle. According to our research ready Backend Bundle optimizes around 300 hours of development time.',
    },
    {
      icon: 'checkmark-circle-2-outline',
      title: 'Ready to use',
      description: 'We prepared this Backend pack as development basement which lets your team concentrate on business logic and data models.',
    },
  ];

  /* tslint:disable:max-line-length */

  getDescriptions(): Observable<Descriptions[]> {
    return observableOf(this.descriptions);
  }

  getBundleDescriptions(): Observable<Descriptions[]> {
    return observableOf(this.bundleDescriptions);
  }
}
