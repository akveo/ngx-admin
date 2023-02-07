import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,NbActionsModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { SettingsRoutingModule, routedComponents } from './settings-routing.module';
import { FsIconComponent } from './keywordsdictionary/keywordsdictionary.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    SettingsRoutingModule,
    Ng2SmartTableModule,
    NbActionsModule,
    ngFormsModule
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
  ],
})
export class SettingsModule { }
