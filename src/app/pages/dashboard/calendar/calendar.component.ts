import {Component, ViewEncapsulation} from '@angular/core';

import './calendar.loader.ts';
import {layoutColors} from "../../../theme/theme.constants";

@Component({
  selector: 'calendar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('fullcalendar/dist/fullcalendar.css'), require('./calendar.scss')],
  template: require('./calendar.html')
})
export class Calendar {


  ngAfterViewInit() {
    this._initCalendar();
  }

  _initCalendar() {
    let palette = layoutColors.bgColorPalette;

    let $element = $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-03-08',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true);
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-03-01',
          color: palette.silverTree
        },
        {
          title: 'Long Event',
          start: '2016-03-07',
          end: '2016-03-10',
          color: palette.blueStone
        },
        {
          title: 'Dinner',
          start: '2016-03-14T20:00:00',
          color: palette.surfieGreen
        },
        {
          title: 'Birthday Party',
          start: '2016-04-01T07:00:00',
          color: palette.gossipDark
        }
      ]
    });
  }
}
