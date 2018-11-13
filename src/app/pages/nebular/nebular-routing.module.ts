import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NebularComponent } from './nebular.component';
import { CalendarComponent } from './calundar/calendar.component';
import { StepperComponent } from './stepper/stepper.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { WindowComponent } from './window/window.component';
import { ListComponent } from './list/list.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ToastrComponent } from './toastr/toastr.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NebularFormInputsComponent } from './form-inputs/nebular-form-inputs.component';
import { ChatComponent } from './chat/chat.component';

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
    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'infinite-list',
      component: InfiniteListComponent,
    },
    {
      path: 'toastr',
      component: ToastrComponent,
    },
    {
      path: 'alert',
      component: AlertComponent,
    },
    {
      path: 'progress-bar',
      component: ProgressBarComponent,
    },
    {
      path: 'spinner',
      component: SpinnerComponent,
    },
    {
      path: 'form-inputs',
      component: NebularFormInputsComponent,
    },
    {
      path: 'chat',
      component: ChatComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NebularRoutingModule {
}


