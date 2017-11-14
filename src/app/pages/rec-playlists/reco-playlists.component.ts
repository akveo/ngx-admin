import { Component,OnInit, Inject } from '@angular/core';
import { NluPreferencesService } from '../../@core/data/nlu-preferences.service';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'reco-playlist',
  templateUrl: './reco-playlists.component.html',
})
export class RecoPlaylistsComponent implements OnInit{
  constructor(
    private nluPreferencesService: NluPreferencesService
  ) {}

  ngOnInit() {

  }

  getPreferences() {
    console.log("get preference");
    this.nluPreferencesService.getUserPreferences("dulan.dissanayake@iamplus.com");
  }
}
