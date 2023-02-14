import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { KeywordsDictionaryComponent } from './keywordsdictionary/keywordsdictionary.component';
import { ImageSimilarityComponent } from './imagesimilarity/imagesimilarity.component';
import { HoverEnlargeImageComponent } from '../shares/hover-enlarge-image/hover-enlarge-image.component';
import { CommonModule } from '@angular/common';
import { LabelScoreComponent } from '../shares/label-score/label-score.component';
import { CheckboxComponent } from '../shares/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: SettingsComponent,
  children: [
    {
      path: 'keywordsdictionary',
      component: KeywordsDictionaryComponent,
    },
    {
      path: 'imagesimilarity',
      component: ImageSimilarityComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    HoverEnlargeImageComponent,
    LabelScoreComponent,
    CheckboxComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }

export const routedComponents = [
  SettingsComponent,
  KeywordsDictionaryComponent,
  ImageSimilarityComponent,
];
