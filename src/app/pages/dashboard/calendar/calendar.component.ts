import { Component, OnInit } from '@angular/core';

import { CalendarService } from './calendar.service';
import 'style-loader!./calendar.component.scss';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {

  public calendarConfiguration: any;
  private _calendar: any;

  constructor(private _calendarService: CalendarService) { }

  ngOnInit(): void {
    this.calendarConfiguration = this._calendarService.getData();
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
  }

  public onCalendarReady(calendar): void {
    this._calendar = calendar;
  }

  private _onSelect(start, end): void {
    if (this._calendar !== null) {
      const title: any = prompt('Event Title:');
      let eventData: any;
      if (!!title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
      }
      jQuery(this._calendar).fullCalendar('unselect');
    }
  }
}
