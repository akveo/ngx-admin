import { Component,OnInit, Inject } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { RecommendationEngineService } from '../../@core/data/recommendation-engine.service';
import { UserInfo } from '../../@core/data/model/user-info.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'reco-playlist',
  styleUrls: ['./reco-playlists.component.scss'],
  templateUrl: './reco-playlists.component.html',
})
export class RecoPlaylistsComponent implements OnInit{
  constructor(
    private recommendationEngine: RecommendationEngineService,
  ) {}

  userInfo: UserInfo;
  userId: string;

  ngOnInit() {
  }

  getUserInformation() {
    console.log("get preference :"+this.userId);
    this.recommendationEngine.getUserInfo(this.userId)
    .subscribe((res : UserInfo)=>{
      this.userInfo = res;
      console.log(" userInfo "+this.userInfo.user_id);
    });
  }
}
