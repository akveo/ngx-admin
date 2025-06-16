import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  NbCardModule, 
  NbButtonModule, 
  NbIconModule,
  NbBadgeModule 
} from '@nebular/theme';
import { CountriesComponent } from './countries.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountriesComponent,
      },
    ]),
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbBadgeModule
  ],
  declarations: [
    CountriesComponent,
  ],
})
export class CountriesModule { }