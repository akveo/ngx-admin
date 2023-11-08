import { Component } from '@angular/core';
import { CalendarKitMonthCellComponent } from './month-cell/month-cell.component';

@Component({
    selector: 'ngx-calendar-kit',
    templateUrl: 'calendar-kit.component.html',
    styleUrls: ['calendar-kit.component.scss'],
})
export class CalendarKitFullCalendarShowcaseComponent {
  month = new Date();
  monthCellComponent = CalendarKitMonthCellComponent;
}
