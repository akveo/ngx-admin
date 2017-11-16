import { Component,OnInit, Inject, Input } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { RecommendationEngineService } from '../../@core/data/recommendation-engine.service';
import { UserInfo } from '../../@core/data/model/user-info.model';
import { Playlists } from '../../@core/data/model/playlists.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'reco-playlist',
  styleUrls: ['./reco-playlists.component.scss'],
  templateUrl: './reco-playlists.component.html',
})
export class RecoPlaylistsComponent implements OnInit{
  playlists: Playlists;
  userInfo: UserInfo;
  userId: string;

  constructor(
    private recommendationEngine: RecommendationEngineService,
  ) {}

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

  getUserPlaylist() {
    this.recommendationEngine.getPlaylists(this.userId)
    .subscribe((res : Playlists)=> {
      this.playlists = res;
      console.log(" PlayLists "+this.playlists.intent);
    });
  }
}
