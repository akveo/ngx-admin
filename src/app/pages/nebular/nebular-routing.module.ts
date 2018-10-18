import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NebularComponent } from './nebular.component';
import { CalendarComponent } from './calundar/calendar.component';
import { StepperComponent } from './stepper/stepper.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { WindowComponent } from './window/window.component';

const routes: Routes = [{
  path: '',
  component: NebularComponent,
  children: [
    {
      path: 'calendar',
      component: CalendarComponent,
    },
    {
      path: 'datepicker',
      component: DatepickerComponent,
    },
    {
      path: 'stepper',
      component: StepperComponent,
    },
    {
      path: 'accordion',
      component: AccordionComponent,
    },
    {
      path: 'dialog',
      component: DialogComponent,
    },
    {
      path: 'window',
      component: WindowComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NebularRoutingModule {
}


