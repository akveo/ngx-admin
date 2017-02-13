import {Component} from '@angular/core';

import {CalendarService} from './calendar.service';
import 'style-loader!./calendar.scss';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.html'
})
export class Calendar {

  public calendarConfiguration:any;
  private _calendar:Object;

  constructor(private _calendarService:CalendarService) {
    this.calendarConfiguration = this._calendarService.getData();
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
  }

  public onCalendarReady(calendar):void {
    this._calendar = calendar;
  }

  private _onSelect(start, end):void {

    if (this._calendar != null) {
      let title = prompt('Event Title:');
      let eventData;
      if (title) {
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
