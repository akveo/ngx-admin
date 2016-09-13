import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CalendarModule, GrowlModule} from 'primeng/primeng';
import { CommSimpleTableComponent } from './comm-simple-table.component'


@NgModule({
  imports: [CommonModule, NgaModule, FormsModule, Ng2SmartTableModule, CalendarModule, GrowlModule],
  declarations: [CommSimpleTableComponent],
  exports: [CommSimpleTableComponent]
})
export class CommSimpleTableModule {
}
