import {Component} from '@angular/core';
import {DatePicker} from 'ng2-datepicker/ng2-datepicker';
import '../../../shared/loader/jquery-ui-loader'

class Test {
  date:string;
}
@Component({
  template: `
    <div>
        <h1>calendar test</h1>
        <p-calendar [(ngModel)]="dateValue" ngDefaultControl></p-calendar>
        <date-picker [(ngModel)]="date1" ngDefaultControl></date-picker>
        <date-picker [(ngModel)]="date2" view-format="DD.MM.YYYY" model-format="YYY-MM-DD" init-date="2017-05-12" ngDefaultControl> </date-picker>
    </div>
  `
})
export class Hour24ChannelDemo {
  date1:string;
  date2:string;
  dateValue:string;

  constructor() {
  }
}
