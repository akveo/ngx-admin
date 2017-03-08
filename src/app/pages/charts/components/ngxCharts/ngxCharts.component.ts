import { Component } from '@angular/core';
import { single, multi } from './data';
import 'style-loader!./ngxCharts.scss';

@Component({
  selector: 'ngx-charts',
  templateUrl: './ngxCharts.html',
})

export class NgxCharts {
  public single: any[];
  public multi: any[];

  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi})
  }
}
