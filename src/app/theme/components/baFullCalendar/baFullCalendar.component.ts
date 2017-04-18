import {Component, ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import 'fullcalendar/dist/fullcalendar.js';
import * as jQuery from 'jquery';

@Component({
  selector: 'ba-full-calendar',
  templateUrl: './baFullCalendar.html'
})
export class BaFullCalendar {

  @Input() baFullCalendarConfiguration:Object;
  @Input() baFullCalendarClass:string;
  @Output() onCalendarReady = new EventEmitter<any>();

  @ViewChild('baFullCalendar') public _selector:ElementRef;

  ngAfterViewInit() {
    let calendar = jQuery(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);
    this.onCalendarReady.emit(calendar);
  }
}
