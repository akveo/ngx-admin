import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import 'fullcalendar/dist/fullcalendar.js';

import 'style-loader!./ba-full-calendar.component.scss';

@Component({
  selector: 'ba-full-calendar',
  templateUrl: './ba-full-calendar.component.html',
})
export class BaFullCalendar implements AfterViewInit {

  @Input() baFullCalendarConfiguration: any;
  @Input() baFullCalendarClass: string;
  @Output() onCalendarReady = new EventEmitter<any>();

  @ViewChild('baFullCalendar') public _selector: ElementRef;

  ngAfterViewInit() {
    const calendar: any = jQuery(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);
    this.onCalendarReady.emit(calendar);
  }
}
