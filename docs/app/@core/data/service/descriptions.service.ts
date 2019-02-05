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
      description: 'With 3 themes, 2 dashboards, and outstanding UI architecture, it’s easy to change the themes and find the right fit for your company',
    },
    {
      icon: 'heart-outline',
      title: 'Updated and supported',
      description: 'Continuous updates and fixes from the development team to keep your tech up to date. The friendly and active community support team are ready to guide you through your challenges',
    },
  ];
  /* tslint:enable:max-line-length */

  getDescriptions(): Observable<Descriptions[]> {
    return observableOf(this.descriptions);
  }

  /* tslint:disable:max-line-length */
  private bundleDescriptions: Descriptions[] = [
    {
      icon: 'umbrella-outline',
      title: 'Convenient',
      description: 'Complete pack of well known Angular based ngx-admin template, integrated with Backend Solution. Finally, you can get fully backend integrated solution out of the box. Flexibility of Ngx Admin, the variety of Nebular features and convenience of integrated Backend in one pack.',
    },
    {
      icon: 'settings-2-outline',
      title: 'Functional',
      description: 'Functional Backend Solution with Designed and Implemented Services and Data Flow. Deploy it as ready to use solution for a particular case, or give it to your development team to incrementally add functionality for the bigger system. it gives you a significant boost on start and solid development structure.',
    },
    {
      icon: 'clock-outline',
      title: 'Efficient',
      description: 'Save more than $21,000 using Backend Bundle. According to our research usage of a ready Backend Bundle optimizes 300 hours of development time. Taking the average hourly rate of a full stack developer in the US - $70.',
    },
    {
      icon: 'checkmark-circle-2-outline',
      title: 'Ready to use',
      description: 'We prepared this backend pack as development basement which lets your team concentrate on business logic and data models. Now .NET and .NET Core are available as frameworks of choice. More are in progress…',
    },
  ];
  /* tslint:enable:max-line-length */

  getBundleDescriptions(): Observable<Descriptions[]> {
    return observableOf(this.bundleDescriptions);
  }
}
