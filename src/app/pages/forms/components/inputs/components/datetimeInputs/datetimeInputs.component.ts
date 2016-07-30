import { Component, ElementRef, Input, Output, EventEmitter, OnInit, NgZone, SimpleChange} from '@angular/core';
import {DateTimePicker} from "./components/datetimepicker/datetimepicker.component";


@Component({
  selector: 'datetimeInputs',
  template: require('./datetimeInputs.html'),
  directives: [DateTimePicker]
})

export class DateTimeInputs {
  dateTime = '01 09 2016 - 02:30 PM';
}
