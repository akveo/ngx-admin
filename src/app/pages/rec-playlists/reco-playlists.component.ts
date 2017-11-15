import { Component,OnInit, Inject } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { RecommendationEngineService } from '../../@core/data/recommendation-engine.service';

@Component({
  selector: 'reco-playlist',
  templateUrl: './reco-playlists.component.html',
})
export class RecoPlaylistsComponent implements OnInit{
  constructor(
    private recommendationEngine: RecommendationEngineService,
  ) {}

  ngOnInit() {

  }

  loadData() {
    this.getUserInformation();
  }

  private getUserInformation() {
    console.log("get preference");
    this.recommendationEngine.getUserInfo("dulan.dissanayake@iamplus.com");
  }
}
