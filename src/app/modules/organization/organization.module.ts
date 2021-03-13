import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrganizationListPageComponent } from './components/list-page/list-page.component';
import { NbAccordionModule, NbCardModule, NbIconModule, NbListModule, NbTabsetModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { OrganizationDetailPageComponent } from './components/detail-page/detail-page.component';
import { DataSharingAgreementComponent } from './components/data-sharing-agreement/data-sharing-agreement.component';
import { WidgetsModule } from '../../widgets/widgets.module';



@NgModule({
  declarations: [
    OrganizationListPageComponent,
    OrganizationDetailPageComponent,
    DataSharingAgreementComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbAccordionModule,
    NbCardModule,
    NbIconModule,
    NbListModule,
    NbTabsetModule,
    RouterModule.forChild([
      { path: 'list', component: OrganizationListPageComponent },
      { path: ':id', component: OrganizationDetailPageComponent }
    ]),
    WidgetsModule,
  ]
})
export class OrganizationModule { }
