import { NgModule } from '@angular/core';

// modules
import { ThemeModule } from '../../@theme/theme.module';
import { NebularRoutingModule } from './nebular-routing.module';

// components
import { NebularComponent } from './nebular.component';
import { CalendarComponent } from './calundar/calendar.component';
import { DayCellComponent } from './calundar/day-cell/day-cell.component';
import { StepperComponent } from './stepper/stepper.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { ShowcaseDialogComponent } from './dialog/showcase-dialog/showcase-dialog.component';
import { NbDialogModule } from '@nebular/theme';
import { DialogNamePromptComponent } from './dialog/dialog-name-prompt/dialog-name-prompt.component';

const COMPONENTS = [
  NebularComponent,
  CalendarComponent,
  DayCellComponent,
  StepperComponent,
  AccordionComponent,
  DatepickerComponent,
  DialogComponent,
  ShowcaseDialogComponent,
  DialogNamePromptComponent,
];

const ENTRY_COMPONENTS = [
  ShowcaseDialogComponent,
  DialogNamePromptComponent,
];


const MODULES = [
  ThemeModule,
  NebularRoutingModule,
  NbDialogModule.forChild(),
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class NebularModule {
}
