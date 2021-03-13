import { getLocaleDateTimeFormat } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-date-calendar',
    templateUrl: './date-calendar.component.html',
    styleUrls: ['./date-calendar.component.scss']
})
export class DateCalendarComponent implements OnInit {
    @Input() date: Date | string;
    @Input() size: string = "size1x";

    datestr: string;
    weekday: string;
    day: string;
    month: string;
    year: string;

    constructor() {
    }

    ngOnInit() {
        if (typeof this.date === 'string') {
            this.date = new Date(this.date);
        }

        this.datestr = this.date.toISOString();

        const dateParts: any = this.extract(this.date);

        this.weekday = dateParts.weekday;
        this.day = dateParts.day;
        this.month = dateParts.month;
        this.year = dateParts.year;
    }

    private extract(date: Date): object {
        const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(navigator.language, {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
            timeZone: 'UTC'
        });
        const parts: Intl.DateTimeFormatPart[] = formatter.formatToParts(date);

        let result = {}
        for (let p of parts) {
            result[p.type] = p.value;
        }

        return result;
    }
}