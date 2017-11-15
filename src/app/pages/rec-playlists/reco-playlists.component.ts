import { Component,OnInit, Inject } from '@angular/core';
import { NluPreferencesService } from '../../@core/data/nlu-preferences.service';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { RecommendationEngineService } from '../../@core/data/recommendation-engine.service';

@Component({
  selector: 'reco-playlist',
  templateUrl: './reco-playlists.component.html',
})
export class RecoPlaylistsComponent implements OnInit{
  constructor(
    private nluPreferencesService: NluPreferencesService,
    private recommendationEngine: RecommendationEngineService,
  ) {}

  ngOnInit() {

  }

  loadData() {
    this.getPreferences();
    this.getArtists();
  }
  private getPreferences() {
    console.log("getPreferences()");
    this.nluPreferencesService.getUserPreferences("dulan.dissanayake@iamplus.com");
  }

  private getArtists() {
    console.log("get preference");
    this.recommendationEngine.getFavouriteHistoryArtists("dulan.dissanayake@iamplus.com");
  }
}
