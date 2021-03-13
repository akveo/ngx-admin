import { NgModule } from "@angular/core";
import { NbIconModule } from "@nebular/theme";
import { DateCalendarComponent } from "./date/date-calendar.component";
import { VerificationIconComponent } from "./verification/verification-icon.component";

@NgModule({
    declarations: [
        VerificationIconComponent,
        DateCalendarComponent,
    ],
    exports: [
        VerificationIconComponent,
        DateCalendarComponent,
    ],
    imports: [
        NbIconModule,
    ]
})
export class WidgetsModule { }