import {
  Component,
  OnInit
} from '@angular/core';

import {D3JsService} from './D3Js.service';

@Component({
  selector: 'd3-js',
  template: require('./D3Js.html'),
  styles: [require('./D3Js.scss')]
})
export class D3Js implements OnInit {

  data: any;

  constructor(private _d3JsService:D3JsService) {
  }

  ngOnInit() {
    // get sample data
    this.data = this._d3JsService.getAll();
  }
}