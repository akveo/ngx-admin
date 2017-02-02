import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../theme/nga.module';

import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [PagesComponent]
})
export class PagesModule { }
