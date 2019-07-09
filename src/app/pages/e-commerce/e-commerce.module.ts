import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ECommerceComponent,
  ],
  providers: [ ],
})
export class ECommerceModule { }
