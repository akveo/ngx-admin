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
import { NbDialogModule, NbWindowModule } from '@nebular/theme';
import { DialogNamePromptComponent } from './dialog/dialog-name-prompt/dialog-name-prompt.component';
import { WindowComponent } from './window/window.component';
import { WindowFormComponent } from './window/window-form/window-form.component';
import { ListComponent } from './list/list.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ToastrComponent } from './toastr/toastr.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {
  InteractiveProgressBarComponent,
} from './progress-bar/interactive-progress-bar/interactive-progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerColorComponent } from './spinner/spinner-color/spinner-color.component';
import { SpinnerSizesComponent } from './spinner/spinner-sizes/spinner-sizes.component';
import { SpinnerInButtonsComponent } from './spinner/spinner-in-buttons/spinner-in-buttons.component';
import { SpinnerInTabsComponent } from './spinner/spinner-in-tabs/spinner-in-tabs.component';
import { NebularFormInputsComponent } from './form-inputs/nebular-form-inputs.component';
import { NebularInputsComponent } from './form-inputs/nebular-inputs/nebular-inputs.component';
import { NebularCheckboxComponent } from './form-inputs/nebular-checkbox/nebular-checkbox.component';
import { NebularRadioGroupComponent } from './form-inputs/nebular-radio-group/nebular-radio-group.component';
import { NebularSelectComponent } from './form-inputs/nebular-select/nebular-select.component';
import { ChatComponent } from './chat/chat.component';
import { TooltipComponent } from './tooltip/tooltip.component';

// services
import { NewsService } from './services/news.service';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';

const COMPONENTS = [
  NebularComponent,
  CalendarComponent,
  DayCellComponent,
  StepperComponent,
  ListComponent,
  InfiniteListComponent,
  NewsPostComponent,
  NewsPostPlaceholderComponent,
  ToastrComponent,
  AccordionComponent,
  DatepickerComponent,
  DialogComponent,
  ShowcaseDialogComponent,
  DialogNamePromptComponent,
  WindowComponent,
  WindowFormComponent,
  AlertComponent,
  ProgressBarComponent,
  InteractiveProgressBarComponent,
  SpinnerComponent,
  SpinnerColorComponent,
  SpinnerSizesComponent,
  SpinnerInButtonsComponent,
  SpinnerInTabsComponent,
  NebularFormInputsComponent,
  NebularInputsComponent,
  NebularCheckboxComponent,
  NebularRadioGroupComponent,
  NebularSelectComponent,
  ChatComponent,
  TooltipComponent,
];

const ENTRY_COMPONENTS = [
  ShowcaseDialogComponent,
  DialogNamePromptComponent,
  WindowFormComponent,
];

const MODULES = [
  ThemeModule,
  NebularRoutingModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
];

const SERVICES = [
  NewsService,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class NebularModule {
}
