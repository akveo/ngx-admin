import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloPeterReviewsComponent } from './hello-peter-reviews/hello-peter-reviews.component';
import { InsightsComponent } from './insights.component';

const routes: Routes = [{
  path: '',
  component: InsightsComponent,
  children: [
    {
      path: 'hello-peter-reviews',
      component: HelloPeterReviewsComponent,
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsRoutingModule { }
