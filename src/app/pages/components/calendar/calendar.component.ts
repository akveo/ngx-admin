import {Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import {Options} from 'fullcalendar';
import * as moment from 'moment';

@Component({
    template: '<div></div>',
    selector: 'ngx-calendar',
    styleUrls: ['./calendar.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {

    @Input() options: Options;
    text: string;
    calendarInitiated: boolean;
    calendarOptions: Object;
    todayDate: moment.Moment;
    private YM: string;
    private YESTERDAY: string;
    private TODAY: string;
    private TOMORROW: string;

    constructor(private element: ElementRef) {

    }

    ngOnInit(): void {
        this.todayDate = moment().startOf('day');
        this.YM = this.todayDate.format('YYYY-MM');
        this.YESTERDAY = this.todayDate.subtract(1, 'day').format('YYYY-MM-DD');
        this.TODAY = this.todayDate.format('YYYY-MM-DD');
        this.TOMORROW = this.todayDate.add(1, 'day').format('YYYY-MM-DD');

        this.calendarOptions = {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek',
            },
            // slotEventOverlap: false,
            // selectOverlap: false,
            // eventOverlap: false,
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: this.YM + '-01',
                },
                {
                    title: 'Reporting',
                    start: this.YM + '-14T13:30:00',
                    end: this.YM + '-14',
                    className: 'm-fc-event--accent',
                },
                {
                    title: 'Company Trip',
                    start: this.YM + '-02',
                    end: this.YM + '-03',
                    className: 'm-fc-event--primary',
                },
                {
                    title: 'ICT Expo 2017 - Product Release',
                    start: this.YM + '-03',
                    end: this.YM + '-05',
                    className: 'm-fc-event--light m-fc-event--solid-primary',
                },
                {
                    title: 'Dinner',
                    start: this.YM + '-12',
                    end: this.YM + '-10',
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: this.YM + '-09T16:00:00',
                    className: 'm-fc-event--danger',
                },
                {
                    id: 1000,
                    title: 'Repeating Event',
                    start: this.YM + '-16T16:00:00',
                },
                {
                    title: 'Conference',
                    start: this.YESTERDAY,
                    end: this.TOMORROW,
                    className: 'm-fc-event--accent',
                },
                {
                    title: 'Meeting',
                    start: this.TODAY + 'T10:30:00',
                    end: this.TODAY + 'T12:30:00',
                },
                {
                    title: 'Lunch',
                    start: this.TODAY + 'T12:00:00',
                    className: 'm-fc-event--info',
                },
                {
                    title: 'Meeting',
                    start: this.TODAY + 'T14:30:00',
                    className: 'm-fc-event--warning',
                },
                {
                    title: 'Happy Hour',
                    start: this.TODAY + 'T17:30:00',
                    className: 'm-fc-event--metal',
                },
                {
                    title: 'Dinner',
                    start: this.TODAY + 'T20:00:00',
                    className: 'm-fc-event--solid-focus m-fc-event--light',
                },
                {
                    title: 'Birthday Party',
                    start: this.TOMORROW + 'T07:00:00',
                    className: 'm-fc-event--primary',
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: this.YM + '-28',
                    className: 'm-fc-event--solid-info m-fc-event--light',
                },
            ],
        };
        $('ngx-calendar').fullCalendar(this.calendarOptions);
    }

    onCalendarInit(initialized: boolean) {
    }

    updateEvent(event) {
        return $(this.element.nativeElement).fullCalendar('updateEvent', event);
    }

    clientEvents(idOrFilter) {
        return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
    }

}
