import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { KeywordsDictionaryComponent } from './keywordsdictionary/keywordsdictionary.component';

const routes: Routes = [{
  path: '',
  component: SettingsComponent,
  children: [
    {
      path: 'keywordsdictionary',
      component: KeywordsDictionaryComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }

export const routedComponents = [
  SettingsComponent,
  KeywordsDictionaryComponent,
];
