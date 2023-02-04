import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightsRoutingModule } from './insights-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { HelloPeterReviewsComponent } from './hello-peter-reviews/hello-peter-reviews.component';


@NgModule({
  declarations: [
    HelloPeterReviewsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,

    InsightsRoutingModule
  ]
})
export class InsightsModule { }
