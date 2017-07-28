import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

@Injectable()
export class StateService {

  protected layouts: any = [
    {
      name: 'One Column',
      icon: 'ion ion-grid',
      id: 'one-column',
      selected: true,
    },
    {
      name: 'Two Column',
      icon: 'ion ion-grid',
      id: 'two-column',
    },
    {
      name: 'Three Column',
      icon: 'ion ion-grid',
      id: 'three-column',
    },
    {
      name: 'Center Column',
      icon: 'ion ion-grid',
      id: 'center-column',
    },
  ];

  protected sidebars: any = [
    {
      name: 'Left Sidebar',
      icon: 'ion ion-grid',
      id: 'left',
      selected: true,
    },
    {
      name: 'Right Sidebar',
      icon: 'ion ion-grid',
      id: 'right',
    },
  ];

  protected layoutState$ = new BehaviorSubject(this.layouts[0]);
  protected sidebarState$ = new BehaviorSubject(this.sidebars[0]);

  setLayoutState(state: any): any {
    this.layoutState$.next(state);
  }

  getLayoutStates(): Observable<any[]> {
    return Observable.of(this.layouts);
  }

  onLayoutState(): Observable<any> {
    return this.layoutState$.asObservable();
  }

  setSidebarState(state: any): any {
    this.sidebarState$.next(state);
  }

  getSidebarStates(): Observable<any[]> {
    return Observable.of(this.sidebars);
  }

  onSidebarState(): Observable<any> {
    return this.sidebarState$.asObservable();
  }
}
