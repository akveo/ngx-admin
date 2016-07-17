import {Component, OnInit} from '@angular/core';


import {BaAppPicturePipe} from '../../../../theme/pipes';
import {BaCard} from '../../../../theme/components';
import {AppState} from "../../../../app.state";

//noinspection TypeScriptValidateTypes
@Component({
  selector: 'item-overdrive',
  pipes: [BaAppPicturePipe],
  directives: [BaCard],
  providers: [],
  styles: [],
  template: require('./overdrive.html'),
})
export class Overdrive extends OnInit{

  constructor(private _state:AppState) {
    super();
  }

  ngOnInit():any {
    this._state.notifyDataChanged('page.activePage', {
      title: 'Overdrive Page Title and Breadcrumb',
      breadcrumb: {
        title: 'Dashboard',
        path: '/'
      }
    })
  }
}
