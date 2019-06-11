import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';

// components
import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import { AccordionComponent } from './accordion/accordion.component';
// service
import { NewsService } from './services/news.service';

const COMPONENTS = [
  LayoutComponent,
  TabsComponent,
  Tab1Component,
  Tab2Component,
  StepperComponent,
  ListComponent,
  NewsPostPlaceholderComponent,
  InfiniteListComponent,
  NewsPostComponent,
  AccordionComponent,
];

const SERVICES = [
  NewsService,
];

const MODULES = [
  ThemeModule,
  LayoutRoutingModule,
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
})
export class LayoutModule { }
