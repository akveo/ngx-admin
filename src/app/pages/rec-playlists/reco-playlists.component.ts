import { Component,OnInit, Inject } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { RecommendationEngineService } from '../../@core/data/recommendation-engine.service';
import { UserInfo } from '../../@core/data/model/user-info.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'reco-playlist',
  templateUrl: './reco-playlists.component.html',
})
export class RecoPlaylistsComponent implements OnInit{
  constructor(
    private recommendationEngine: RecommendationEngineService,
  ) {}

  private userInfo: UserInfo;

  ngOnInit() {
  }

  loadData() {
    this.getUserInformation();
  }

  private getUserInformation() {
    console.log("get preference");

    this.recommendationEngine.getUserInfo("dulan.dissanayake@iamplus.com").subscribe((res : UserInfo)=>{
      this.userInfo = res;
      console.log(" userInfo "+this.userInfo.user_id);
    });
  }
}
